// Edit everything about the artist here. The page updates automatically.

export const artist = {
  name: 'MOOZE',
  tagline: 'Rapper · Musician · Lyricist · Actor',
  bio: 'Sri Lankan rapper bringing raw lyrics and heavy beats to stages and screens. Watch the biggest tracks below, catch a live show, or book MOOZE for your event.',
  youtube: 'https://www.youtube.com/channel/UCe4w-lAiJw7BCjTxecWVw5A',
  youtubeChannelId: 'UCe4w-lAiJw7BCjTxecWVw5A',
  facebook: 'https://www.facebook.com/sehadu.dilneth',
  email: 'bookings@example.com',
  // YouTube video IDs shown in the Videos section, in this order (the part after v= in the link)
  videoIds: ['irGleXeRdGQ', 'gUDYK1cRids', '2NpSvpSwS04', 'ZQBsGmxs7cY', '7UeKg3q0hrU'],
};

export type Show = {
  date: string; // YYYY-MM-DD (past dates hide automatically)
  title: string;
  venue: string;
  city: string;
  status: 'tickets' | 'soldout' | 'free';
  ticketUrl?: string;
};

export const shows: Show[] = [
  { date: '2026-12-12', title: 'Colombo Night Live', venue: 'Nelum Pokuna Theatre', city: 'Colombo', status: 'tickets', ticketUrl: '#book' },
  { date: '2026-12-26', title: 'Year-End Bash', venue: 'Open Air Arena', city: 'Kandy', status: 'tickets', ticketUrl: '#book' },
  { date: '2027-01-17', title: 'Galle Beach Sessions', venue: 'Galle Face Green', city: 'Galle', status: 'soldout' },
  { date: '2027-02-06', title: 'Northern Lights Show', venue: 'Municipal Ground', city: 'Jaffna', status: 'free' },
];

export const tour = {
  name: 'MOOZE World Tour 2027',
  legs: [
    { region: 'Sri Lanka', stops: [{ city: 'Colombo', date: 'Mar 05' }, { city: 'Kandy', date: 'Mar 12' }, { city: 'Galle', date: 'Mar 19' }, { city: 'Jaffna', date: 'Mar 26' }] },
    { region: 'Asia', stops: [{ city: 'Chennai', date: 'Apr 09' }, { city: 'Dubai', date: 'Apr 16' }, { city: 'Singapore', date: 'Apr 23' }, { city: 'Kuala Lumpur', date: 'Apr 30' }] },
    { region: 'Europe', stops: [{ city: 'London', date: 'May 21' }, { city: 'Paris', date: 'May 28' }, { city: 'Berlin', date: 'Jun 04' }, { city: 'Amsterdam', date: 'Jun 11' }] },
  ],
};

export const bookingTypes = ['Live show', 'Studio session', 'Feature / collab', 'Interview', 'Meet and greet'];