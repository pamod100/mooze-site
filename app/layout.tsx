import type { Metadata, Viewport } from 'next';
import { Anton, Space_Grotesk } from 'next/font/google';
import './globals.css';

const display = Anton({ weight: '400', subsets: ['latin'], variable: '--font-display' });
const body = Space_Grotesk({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'MOOZE – Official Website',
  description: 'Official website of MOOZE: top music videos, upcoming shows, world tour and bookings.',
  openGraph: { title: 'MOOZE – Official Website', images: ['/mooze.jpg'] },
};
export const viewport: Viewport = { themeColor: '#000000', colorScheme: 'dark' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
