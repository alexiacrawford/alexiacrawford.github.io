import './globals.css';
import Sidebar from '@/components/SideBar';
import GradientBackgroundPointer from '@/components/GradientBackgroundPointer';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Alexia Crawford – Portfolio',
  description: 'Software Developer, Tech analyst, and CS Student at University of Oregon',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
      >
        <GradientBackgroundPointer />
        <div className="lg:flex min-h-screen w-full">
          {/* Left Side: Sidebar/Intro Panel */}
          {/* <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[40%] p-8 flex flex-col justify-between border-r border-white/10">
          </aside> */}
                      <Sidebar />

          {/* Right Side: Content + TopBar */}
          <div className="lg:w-[90%] w-full">
            <main className="pt-24 px-8 pb-12">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
