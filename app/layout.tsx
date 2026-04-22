import "./globals.css";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import SiteNavbar from "@/components/Site-Navbar";
import ParticlesBackground from "@/components/Particles-Background";
import Background from "@/components/UI/Background";

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
      <body className={`${geistMono.className} antialiased text-white`}>
        <main className="relative min-h-screen bg-[#080c14]">
          <Background />
          <ParticlesBackground />
          <SiteNavbar />
          {children}
        </main>
      </body>
    </html>
  );
}
