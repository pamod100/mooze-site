'use client';
import { useEffect, useRef, useState } from 'react';
import { artist } from '@/lib/data';

/**
 * Full-screen video. While the visitor scrolls, the video stays fixed and the
 * MOOZE text fades in on top of it. Put your video at public/mooze.mp4
 */
export default function VideoIntro() {
  const sentinel = useRef<HTMLDivElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [shown, setShown] = useState(false);

  // No scroll listener: the browser tells us once when the marker scrolls into view.
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      setShown(e.isIntersecting || e.boundingClientRect.top < 0);
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  function toggleSound() {
    const v = vid.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    v.play().catch(() => {});
  }

  return (
    <section className={`stage ${shown ? 'in' : ''}`} id="top" aria-label="MOOZE intro">
      <div className="stage-sticky">
        <video ref={vid} autoPlay muted loop playsInline preload="auto">
          <source src="/mooze.mp4" type="video/mp4" />
        </video>
        <div className="stage-shade" />

        <div className="stage-text">
          <div className="wrap">
            <p className="eyebrow">{artist.tagline}</p>
            <h1 aria-label={artist.name}>
              {[...artist.name].map((ch, i) => (
                <span key={i} aria-hidden="true" className="ch" style={{ animationDelay: `${0.2 + i * 0.18}s` }}>{ch}</span>
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
        </div>

        <button className="soundbtn" onClick={toggleSound} suppressHydrationWarning>
          {muted ? 'Sound on' : 'Sound off'}
        </button>
      </div>
      <div ref={sentinel} className="stage-marker" aria-hidden="true" />
    </section>
  );
}