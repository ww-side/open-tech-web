// Core
import { type ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Components
import { Footer, Header, Head } from '@/components/common';

// Utils
import { homeMetadata } from '@/constants/metadata';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = homeMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <Head />
      <body
        className={`min-h-screen flex flex-col overflow-x-hidden ${inter.className}`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
