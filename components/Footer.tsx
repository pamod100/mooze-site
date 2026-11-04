import { artist } from '@/lib/data';

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <span>© {new Date().getFullYear()} {artist.name}. All rights reserved.</span>
        <span className="socials">
          <a href={artist.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href={artist.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href={`mailto:${artist.email}`}>Email</a>
        </span>
      </div>
    </footer>
  );
}
