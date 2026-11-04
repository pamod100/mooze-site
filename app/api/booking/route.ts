import { NextResponse } from 'next/server';

const esc = (s: unknown) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));

export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b || b.company) return NextResponse.json({ ok: true }); // honeypot: pretend success to bots
  if (!b.name || !b.email || !b.type || !b.date) return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });

  const html = `<h2>New booking request</h2>` +
    ['name', 'email', 'phone', 'type', 'date', 'time', 'location', 'message']
      .map((k) => `<p><b>${k}:</b> ${esc(b[k])}</p>`).join('');

  const { RESEND_API_KEY, BOOKING_TO_EMAIL, BOOKING_FROM_EMAIL } = process.env;
  if (RESEND_API_KEY && BOOKING_TO_EMAIL) {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: BOOKING_FROM_EMAIL || 'Bookings <onboarding@resend.dev>',
        to: [BOOKING_TO_EMAIL],
        reply_to: b.email,
        subject: `Booking: ${b.type} on ${b.date} (${b.name})`,
        html,
      }),
    });
    if (!r.ok) return NextResponse.json({ ok: false }, { status: 502 });
  } else {
    console.log('Booking request (no email service configured):', b);
  }
  return NextResponse.json({ ok: true });
}
