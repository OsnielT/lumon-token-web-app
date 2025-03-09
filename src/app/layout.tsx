import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';
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
  title:
    'LUMON Token - Your data is refined. Your transactions are pure. Your future is secure.',
  description:
    'LUMON Token is the premier digital asset for those who embrace discipline, structure, and the balance of Woe, Frolic, Dread, and Malice.',
  metadataBase: new URL('https://www.lumon-token.com'),
  openGraph: {
    title: 'LUMON Token - A Blockchain Asset for the Severed Mind',
    description:
      'For those who understand structure, purpose, and discipline—LUMON Token is your key to a decentralized future. Embrace Woe, Frolic, Dread, and Malice in perfect balance.',
    url: 'https://www.lumon-token.com',
    siteName: 'LUMON Token',
    images: [
      {
        url: '/lumon-token-logo.png',
        width: 1200,
        height: 630,
        alt: 'LUMON Token - Your data is refined. Your transactions are pure. Your future is secure.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/LUMON-ICON.png"
        />
        <link
          rel="icon"
          href="/LUMON-ICON.ico"
          type="image/x-icon"
          sizes="16x16"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
