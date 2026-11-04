'use client';
import { useEffect, useRef, useState } from 'react';
import { artist } from '@/lib/data';

/**
 * Full-screen video. While the visitor scrolls, the video stays fixed and the
 * MOOZE text fades in on top of it. Put your video at public/mooze.mp4
 */
export default function VideoIntro() {
  const stage = useRef<HTMLElement>(null);
  const sticky = useRef<HTMLDivElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let raf = 0;
    let on = false;
    const update = () => {
      raf = 0;
      const s = stage.current;
      const st = sticky.current;
      if (!s || !st) return;
      const r = s.getBoundingClientRect();
      const dist = Math.max(1, r.height - st.offsetHeight);
      const p = Math.min(1, Math.max(0, (56 - r.top) / dist)); // 56px = navbar height
      s.style.setProperty('--k', String(Math.min(1, p * 2.5)));
      if (!on && p > 0.2) { on = true; setShown(true); }
      else if (on && p < 0.08) { on = false; setShown(false); }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  function toggleSound() {
    const v = vid.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    v.play().catch(() => {});
  }

  return (
    <section ref={stage} className={`stage ${shown ? 'in' : ''}`} id="top" aria-label="MOOZE intro">
      <div ref={sticky} className="stage-sticky">
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
        <div className="scrollhint" aria-hidden="true">Scroll<i /></div>
      </div>
    </section>
  );
}