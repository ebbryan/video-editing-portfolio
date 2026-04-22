import "./globals.css";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import SiteNavbar from "@/components/Site-Navbar";
import ParticlesBackground from "@/components/Particles-Background";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Earl.Creatives",
  description: "Video Editing Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.className} antialiased text-white overflow-y-auto scrollbar-none`}
      >
        <main className="relative min-h-screen bg-[#080c14] overflow-x-hidden">
          <div className="pointer-events-none fixed inset-0 z-0">
            <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-sky-600/10 blur-[120px]" />
            <div className="absolute bottom-[-5%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-700/10 blur-[100px]" />
          </div>
          <ParticlesBackground />
          <SiteNavbar />
          {children}
        </main>
      </body>
    </html>
  );
}
