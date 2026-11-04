import Image from 'next/image';
import { artist } from '@/lib/data';

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-photo">
        <Image src="/mooze.jpg" alt={artist.name} fill priority sizes="(min-width: 800px) 55vw, 100vw" style={{ objectFit: 'cover', objectPosition: 'center 20%' }} />
      </div>
      <div className="wrap hero-text">
        <p className="eyebrow">{artist.tagline}</p>
        <h1 aria-label={artist.name}>
          {[...artist.name].map((ch, i) => (
            <span key={i} aria-hidden="true" className="ch" style={{ animationDelay: `${0.3 + i * 0.2}s` }}>{ch}</span>
          ))}
        </h1>
        <p className="lead">{artist.bio}</p>
        <div className="btns">
          <a className="btn fill" href="#videos">Watch top videos</a>
          <a className="btn" href="#book">Book MOOZE</a>
        </div>
        <div className="socials">
          <a href={artist.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href={artist.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </header>
  );
}