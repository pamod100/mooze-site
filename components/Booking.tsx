'use client';
import { FormEvent, useState } from 'react';
import { bookingTypes } from '@/lib/data';

export default function Booking() {
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState('sending');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setState('ok');
    } catch {
      setState('error');
    }
  }

  return (
    <section id="book">
      <div className="wrap">
        <h2>Book an appointment</h2>
        <p className="sub">Shows, features, studio sessions or interviews. Send a request and the team replies within 48 hours.</p>
        <form onSubmit={onSubmit} className="form">
          <label>Full name<input suppressHydrationWarning name="name" required autoComplete="name" /></label>
          <label>Email<input suppressHydrationWarning name="email" type="email" required autoComplete="email" /></label>
          <label>Phone / WhatsApp<input suppressHydrationWarning name="phone" type="tel" autoComplete="tel" /></label>
          <label>Booking type
            <select suppressHydrationWarning name="type" required defaultValue="">
              <option value="" disabled>Choose one</option>
              {bookingTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
          <label>Preferred date<input suppressHydrationWarning name="date" type="date" required /></label>
          <label>Preferred time<input suppressHydrationWarning name="time" type="time" /></label>
          <label className="full">Venue / city<input suppressHydrationWarning name="location" /></label>
          <label className="full">Message<textarea suppressHydrationWarning name="message" rows={4} placeholder="Event details, budget, anything we should know" /></label>
          <input suppressHydrationWarning name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" />
          <div className="full">
            <button suppressHydrationWarning className="btn fill" type="submit" disabled={state === 'sending'}>
              {state === 'sending' ? 'Sending…' : 'Send booking request'}
            </button>
          </div>
        </form>
        {state === 'ok' && <p className="note ok" role="status">Request sent. We will confirm by email soon.</p>}
        {state === 'error' && <p className="note err" role="alert">Something went wrong. Please try again or message on Facebook.</p>}
      </div>
    </section>
  );
}