export type Video = { id: string; title: string };

/** Looks up each video title through YouTube oEmbed (no API key needed). Cached for a day. */
export async function getVideos(ids: string[]): Promise<Video[]> {
  return Promise.all(
    ids.map(async (id, i) => {
      try {
        const r = await fetch(
          `https://www.youtube.com/oembed?url=${encodeURIComponent('https://www.youtube.com/watch?v=' + id)}&format=json`,
          { next: { revalidate: 86400 } },
        );
        const j = await r.json();
        return { id, title: String(j.title ?? `MOOZE video ${i + 1}`) };
      } catch {
        return { id, title: `MOOZE video ${i + 1}` };
      }
    }),
  );
}