"use client";

import { motion, Variants } from "motion/react";
import MenuLinks from "./MenuLinks";

export type MenuTypes = {
  id: number;
  name: string;
  path: string;
};

const navVariants: Variants = {
  hidden: { y: -60, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const linkVariants: Variants = {
  hidden: { y: -10, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const SiteNavbar = () => {
  const menuLinks: MenuTypes[] = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-5 left-0 flex flex-col justify-between items-center w-full p-7 px-10 z-50">
      <motion.div
        className="flex justify-center items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/10 p-3 w-1/4 rounded-2xl"
        variants={navVariants}
        initial="hidden"
        animate="show"
      >
        <MenuLinks links={menuLinks} linkVariants={linkVariants} />
      </motion.div>
    </nav>
  );
};

export default SiteNavbar;
