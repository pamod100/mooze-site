import Image from 'next/image';
import { shows } from '@/lib/data';

const fmtDate = (iso: string) => {
  const d = new Date(iso + 'T00:00:00Z');
  return {
    day: d.toLocaleDateString('en-GB', { day: '2-digit', timeZone: 'UTC' }),
    mon: d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' }).toUpperCase(),
  };
};

export default function Shows() {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = shows.filter((s) => s.date >= today).sort((a, b) => a.date.localeCompare(b.date));

  return (
    <section id="shows">
      <div className="wrap">
        <h2>Upcoming shows</h2>
        {upcoming.length === 0 && <p className="sub">No shows announced right now. Follow on YouTube and Facebook for news.</p>}

        {upcoming.map((s) => {
          const d = fmtDate(s.date);
          return (
            <article className="event" key={s.date + s.title}>
              {s.poster && (
                <a className="poster" href={s.poster.src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${s.title} poster`}>
                  <Image src={s.poster.src} alt={`${s.title} poster`} width={s.poster.width} height={s.poster.height} sizes="(min-width: 800px) 420px, 100vw" />
                </a>
              )}
              <div className="event-body">
                <div className="edate">{d.day}<small>{d.mon}</small></div>
                <h3>{s.title}</h3>
                {s.presenter && <p className="by">Presented by {s.presenter}</p>}
                <ul className="meta">
                  <li>{s.venue}, {s.city}</li>
                  {s.time && <li>{s.time}</li>}
                  {s.price && <li>{s.price}</li>}
                </ul>
                {s.lineup && <p className="lineup">{s.lineup.join(' · ')}</p>}
                <div className="btns">
                  {s.soldOut && <span className="tag">Sold out</span>}
                  {!s.soldOut && s.ticketUrl && (
                    <a className="btn fill" href={s.ticketUrl} target="_blank" rel="noopener noreferrer">{s.ticketLabel ?? 'Buy tickets'}</a>
                  )}
                  {s.contacts?.map((c) => (
                    <a key={c.tel} className="btn" href={`tel:${c.tel}`}>{c.label}: {c.display}</a>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}