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
  presenter?: string;
  venue: string;
  city: string;
  time?: string;
  price?: string;
  lineup?: string[];
  poster?: { src: string; width: number; height: number };
  soldOut?: boolean;
  ticketUrl?: string; // add the Tickets Ministry link here to show a "Buy tickets" button
  ticketLabel?: string;
  contacts?: { label: string; display: string; tel: string }[];
};

export const shows: Show[] = [
  {
    date: '2026-11-14',
    title: 'Mathaka Yathra: Live in Concert',
    presenter: 'Vision Crew',
    venue: 'WTC Mall, G6 Club',
    city: 'Abu Dhabi',
    time: '8:00 PM to 3:00 AM',
    price: 'Online tickets AED 100 (Tickets Ministry)',
    lineup: ['MOOZE', 'Raveen Tharuka', 'Khanna', 'Buwaneka', 'DJ Halee Jay', 'Seven Notes Music Band Dubai'],
    poster: { src: '/posters/mathaka-yathra.jpg', width: 1000, height: 1252 },
    contacts: [
      { label: 'VIP tables', display: '056 891 8607', tel: '+971568918607' },
      { label: 'VIP tables', display: '054 702 5879', tel: '+971547025879' },
    ],
  },
  {
    date: '2027-02-20',
    title: 'MOOZE Live: බන්ධනාගාරේ',
    presenter: 'Kyan Family',
    venue: 'Vihara Mahadevi Open Air Theatre',
    city: 'Colombo',
    time: '5 PM onward',
    poster: { src: '/posters/bandhanagare.jpg', width: 1000, height: 1000 },
    contacts: [{ label: 'More info', display: '+94 76 870 7537', tel: '+94768707537' }],
  },
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