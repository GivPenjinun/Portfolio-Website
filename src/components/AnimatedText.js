import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.09,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto flex py-2 items-center justify-center text-center overflow-hidden dark:text-light">
      <motion.h1
        className={`${className} inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl `}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              key={word + "-" + index}
              className="inline-block"
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
