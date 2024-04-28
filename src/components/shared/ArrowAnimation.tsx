"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function ArrowAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 2 }}
    >
      <Link href="#about" className="arrow">
        <span></span>
        <span></span>
        <span></span>
      </Link>
    </motion.div>
  );
}

export default ArrowAnimation;
