import Image from "next/image";
import Link from "next/link";

const SiteNavbar = () => {
  return (
    <nav className="fixed top-15 left-0 flex flex-col justify-between items-center w-full p-7 px-10 ">
      <div className="flex justify-between items-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default SiteNavbar;
