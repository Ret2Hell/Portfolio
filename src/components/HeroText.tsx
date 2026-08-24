import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["AI-Powered", "Distributed", "Reliable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="hero-copy z-10 mt-24 w-full min-w-0 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Yassine
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Software Engineer <br /> Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords words={words} className="font-black text-white text-8xl" />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Systems & Websites
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="hero-copy-mobile mx-auto flex max-w-lg flex-col gap-7 md:hidden">
        <motion.p
          className="hero-intro font-medium leading-tight"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Yassine
        </motion.p>
        <div className="min-w-0">
          <motion.p
            className="hero-role font-black leading-[0.98] text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Software Engineer
          </motion.p>
          <motion.div
            className="min-w-0"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="hero-flip mt-3 max-w-full font-bold leading-[0.95] text-white"
            />
          </motion.div>
          <motion.p
            className="hero-systems mt-3 font-black leading-none text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Systems
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
