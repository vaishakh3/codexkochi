import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://codexkochi.in'),
  title: 'Codex Kochi — Build what moves the city',
  description:
    'The OpenAI Codex community in Kochi. Local builders, ambitious experiments, and stories like Codex Nightline.',
  openGraph: {
    title: 'Codex Kochi — Kochi builds in motion',
    description:
      'Local builders, ambitious experiments, and stories like Codex Nightline.',
    url: 'https://codexkochi.in',
    siteName: 'Codex Kochi',
    images: [
      {
        url: '/og.png',
        width: 1733,
        height: 907,
        alt: 'Codex Kochi — Kochi builds in motion',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codex Kochi — Kochi builds in motion',
    description:
      'Local builders, ambitious experiments, and stories like Codex Nightline.',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
