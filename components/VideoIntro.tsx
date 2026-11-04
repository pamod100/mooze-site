'use client';
import { useRef, useState } from 'react';

/** Full-screen looping video at the very top. Put your file at public/mooze.mp4 */
export default function VideoIntro() {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    v.play().catch(() => {});
  }

  return (
    <section className="intro" id="top" aria-label="MOOZE intro video">
      <video ref={ref} autoPlay muted loop playsInline preload="auto" poster="/mooze.jpg">
        <source src="/mooze.mp4" type="video/mp4" />
      </video>
      <button className="soundbtn" onClick={toggleSound} suppressHydrationWarning>
        {muted ? 'Sound on' : 'Sound off'}
      </button>
      <div className="scrollhint" aria-hidden="true">Scroll<i /></div>
    </section>
  );
}