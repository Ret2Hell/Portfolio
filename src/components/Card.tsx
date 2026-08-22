import type { CSSProperties, RefObject } from "react";
import { motion } from "motion/react";

interface CardProps {
  style: CSSProperties;
  text?: string;
  image?: string;
  containerRef: RefObject<HTMLDivElement | null>;
}

const Card = ({ style, text, image, containerRef }: CardProps) => {
  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-grab"
      src={image}
      alt=""
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute w-[12rem] cursor-grab rounded-full bg-storm px-1 py-4 text-center text-xl font-extralight ring ring-gray-700"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
