import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {metadata} from './metadata';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <div className="cursor"></div>
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', () => {
              const cursor = document.querySelector('.cursor');
              document.body.addEventListener('mousemove', (e) => {
                cursor.style.top = e.pageY + 'px';
                cursor.style.left = e.pageX + 'px';
              });
            });
          `
        }} />
      </body>
    </html>
  );
}
