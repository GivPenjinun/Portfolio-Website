import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const HireMe = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden ">
      <MotionLink
        href="/contact"
        target={"_blank"}
        className="flex items-center justify-center fixed left-14 bottom-20 bg-dark text-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light shadow-md border-2 border-solid border-light rounded-full w-24 h-24 hover:bg-light hover:text-dark"
        animate={{
          backgroundColor: [
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Hire Me
      </MotionLink>
    </div>
  );
};

export default HireMe;
