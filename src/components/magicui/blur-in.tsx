"use client";

import { motion, MotionStyle } from "framer-motion";

import { cn } from "@/lib/utils";

interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
  style?: MotionStyle;
}
const BlurIn = ({ word, className, variant, duration = 1, style }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial='hidden'
      animate='visible'
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        'font-display text-center text-8xl font-black leading-[4.8rem] tracking-[-0.03em] drop-shadow-sm lg:text-9xl lg:leading-[6.2rem]'
      )}
      style={style}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
