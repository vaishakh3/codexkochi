import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://codexkochi.in'),
  title: 'Codex Kochi — Built here. Shared everywhere.',
  description:
    'Kochi’s ambassador-led OpenAI Codex community: hackathons, hands-on meetups, and ambitious experiments built together.',
  icons: {
    icon: '/codex-app-icon.png',
    apple: '/codex-app-icon.png',
  },
  openGraph: {
    title: 'Codex Kochi — Built here. Shared everywhere.',
    description:
      'Hackathons, hands-on meetups, and ambitious experiments from Kerala’s builder community.',
    url: 'https://codexkochi.in',
    siteName: 'Codex Kochi',
    images: [
      {
        url: '/og.png',
        width: 1732,
        height: 908,
        alt: 'Codex Kochi — Built here. Shared everywhere.',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codex Kochi — Built here. Shared everywhere.',
    description:
      'Hackathons, hands-on meetups, and ambitious experiments from Kerala’s builder community.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
