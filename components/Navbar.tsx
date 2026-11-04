import { artist } from '@/lib/data';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="wrap nav-in">
        <a href="#top" className="logo">{artist.name}</a>
        <ul>
          <li><a href="#videos">Videos</a></li>
          <li><a href="#shows">Shows</a></li>
          <li><a href="#tour">Tour</a></li>
          <li><a href="#book" className="btn small fill">Book</a></li>
        </ul>
      </div>
    </nav>
  );
}
