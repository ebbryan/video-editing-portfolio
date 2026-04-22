"use client";

import { motion, Variants } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const dividerVariant: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center p-2 md:p-10 lg:p-24">
      <motion.div
        className="flex flex-col gap-3 items-center justify-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={fadeUp}>
          <motion.span
            className="text-primary font-bold text-2xl md:text-3xl lg:text-6xl bg-blue-950/50 px-6 rounded-xl inline-block"
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          >
            Earl
          </motion.span>
          <span className="text-primary font-bold lg:text-3xl">.Creatives</span>
        </motion.h1>

        <motion.h2 className="text-sm lg:text-xl text-center" variants={fadeUp}>
          Elevate Your Narrative Through Cinematic Precision.
        </motion.h2>

        <motion.div
          className="w-1/2 h-px rounded-full bg-white/70 mx-auto origin-center"
          variants={dividerVariant}
        />

        <motion.p
          className="text-center text-xs lg:text-sm w-full md:w-full lg:w-1/2"
          variants={fadeIn}
        >
          I transform raw footage into high-impact visual stories that command
          attention. Specializing in seamless pacing, professional color
          grading, and dynamic motion graphics, I provide end-to-end
          post-production solutions tailored for creators and brands who refuse
          to blend in.
        </motion.p>
      </motion.div>
    </section>
  );
}
