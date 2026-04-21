import ParticlesBackground from "@/components/Particles-Background";
import SiteNavbar from "@/components/Site-Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080c14] overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-sky-600/10 blur-[120px]" />
        <div className="absolute bottom-[-5%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-700/10 blur-[100px]" />
      </div>
      <ParticlesBackground />
      <SiteNavbar />
      <section className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="flex flex-col gap-1 items-center justify-center">
          <>
            <h1 className="text-4xl">Zandra Nikki</h1>
            <span className="text-primary font-bold text-4xl">.Creatives</span>
          </>

          <p>
            We are a creative agency that specializes in creating beautiful and
            functional websites.
          </p>
        </div>
      </section>
    </main>
  );
}
