import { tour } from '@/lib/data';

export default function Tour() {
  return (
    <section id="tour">
      <div className="wrap">
        <h2>{tour.name}</h2>
        <div className="tour">
          {tour.legs.map((leg) => (
            <div className="leg" key={leg.region}>
              <h3>{leg.region}</h3>
              <ul>
                {leg.stops.map((s) => (
                  <li key={s.city}>{s.city}<span>{s.date}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
