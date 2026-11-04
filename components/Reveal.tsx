'use client';
import { useEffect, useRef, useState } from 'react';

/** Adds the "in" class the first time the content scrolls into view. */
export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${seen ? 'in' : ''}`}>{children}</div>;
}