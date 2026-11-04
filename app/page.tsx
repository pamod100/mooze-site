import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Shows from '@/components/Shows';
import Tour from '@/components/Tour';
import Videos from '@/components/Videos';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import { artist } from '@/lib/data';
import { getVideos } from '@/lib/youtube';

export const revalidate = 3600; // rebuild hourly so past shows drop off

export default async function Home() {
  const videos = await getVideos(artist.videoIds);
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Videos videos={videos} />
        <Shows />
        <Tour />
        <Booking />
      </main>
      <Footer />
    </>
  );
}