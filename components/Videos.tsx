'use client';
import { useState } from 'react';
import { artist } from '@/lib/data';
import type { Video } from '@/lib/youtube';

function VideoCard({ v, index }: { v: Video; index: number }) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`);

  return (
    <article className="vcard">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
          title={v.title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <>
          <button className="play" suppressHydrationWarning onClick={() => setPlaying(true)} aria-label={`Play ${v.title}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={thumb} alt="" loading={index < 2 ? 'eager' : 'lazy'} onError={() => setThumb(`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`)} />
            <span className="shade" />
            <span className="bigplay" />
          </button>
          <div className="vhead">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="avatar" src="/mooze.jpg" alt="" />
            <div>
              <div className="vtitle">{v.title}</div>
              <small>{artist.name}</small>
            </div>
          </div>
          <a className="vwatch" href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
        </>
      )}
    </article>
  );
}

export default function Videos({ videos }: { videos: Video[] }) {
  return (
    <section id="videos">
      <div className="wrap">
        <h2>Music videos</h2>
        <p className="sub">Tap play and watch right here.</p>
      </div>
      <div className="vlist">
        {videos.map((v, i) => <VideoCard key={v.id} v={v} index={i} />)}
      </div>
      <div className="wrap">
        <p className="more"><a className="btn" href={artist.youtube} target="_blank" rel="noopener noreferrer">More on YouTube</a></p>
      </div>
    </section>
  );
}