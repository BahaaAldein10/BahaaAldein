"use client";

import { motion } from "framer-motion";

type TitleProps = {
  mainTitle: string;
  subTitle: string;
  smallTitle: string;
  component?: React.ReactNode;
};

function Title({ mainTitle, subTitle, smallTitle, component }: TitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
      className="text-center"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="text-3 text-primary"
      >
        {mainTitle}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
        className="text-5"
      >
        {subTitle}
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
        className="pg-20"
      >
        {smallTitle.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.05 * index,
              ease: "easeInOut",
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h3>

      {component && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.1, ease: "easeInOut" }}
        >
          {component}
        </motion.div>
      )}
    </motion.div>
  );
}

export default Title;
