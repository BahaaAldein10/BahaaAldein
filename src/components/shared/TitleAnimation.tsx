"use client";

import { motion } from "framer-motion";
import { HTMLAttributes, forwardRef } from "react";

interface TitleAnimationProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const TitleAnimation = forwardRef<HTMLDivElement, TitleAnimationProps>(
  ({ text, className, ...props }, ref) => {
    const item = {
      hidden: {
        y: "200%",
        opacity: 0,
        transition: {
          duration: 0.8,
          ease: [0.455, 0.03, 0.515, 0.955],
        },
      },
      visible: {
        y: "0",
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.455, 0.03, 0.515, 0.955],
        },
      },
    };

    const words = text.split(" ").map((word) => {
      const characters = word.split("");
      characters.push("\u00A0");
      return characters;
    });

    return (
      <div ref={ref} {...props}>
        {words.map((word, index) => (
          <span
            key={index}
            className="whitespace-nowrap"
            style={{ overflow: "hidden" }}
          >
            {word.map((element, charIndex) => (
              <span
                key={charIndex}
                style={{ overflow: "hidden", display: "inline-block" }}
              >
                <motion.span
                  variants={item}
                  className={className}
                  style={{ display: "inline-block" }}
                >
                  {element}
                </motion.span>
              </span>
            ))}
          </span>
        ))}
      </div>
    );
  }
);

TitleAnimation.displayName = "TitleAnimation";

export default TitleAnimation;
