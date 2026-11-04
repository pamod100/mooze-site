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
            <div className="show" key={s.date + s.title}>
              <div className="date">{d.day}<small>{d.mon}</small></div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.venue}, {s.city}</p>
              </div>
              {s.status === 'soldout' ? <span className="tag">Sold out</span>
                : s.status === 'free' ? <span className="tag hot">Free entry</span>
                : <a className="btn" href={s.ticketUrl ?? '#book'}>Get tickets</a>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
