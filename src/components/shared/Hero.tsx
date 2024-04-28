"use client";

import { containerVariants, titleVariants } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import ArrowAnimation from "./ArrowAnimation";
import TitleAnimation from "./TitleAnimation";

function Hero() {
  return (
    <section className="relative sm:mt-5 select-none">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <div className="grid lg:grid-cols-2 gap-4">
          {/* =======| TITLE |======= */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: -50, scale: 0.75 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "tween",
                duration: 0.8,
                delay: 0.4,
                ease: "easeInOut",
              }}
              style={{ perspective: 1000 }}
              className="w-fit text-5"
            >
              Hi👋🏼 I&apos;m
            </motion.h1>

            <motion.h2
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <TitleAnimation
                text="Bahaa Aldein"
                className="text-1 text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary inline-block"
              />
              <TitleAnimation
                text="MERN Stack Software Engineer"
                className="text-3 text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300 inline-block"
              />
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pg-16"
            >
              Step into my digital playground! With a passion for innovation and
              a mastery of the MERN stack, I specialize in crafting robust,
              scalable, and dynamic web applications tailored to exceed your
              expectations. Let&apos;s bring your ideas to life with
              cutting-edge technology and unparalleled dedication.
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="w-fit"
            >
              <Button asChild className="Button">
                <Link href="#contact">Hire me</Link>
              </Button>
            </motion.div>

            {/* =======| ARROW |======= */}
            <ArrowAnimation />
          </div>

          {/* =======| IMAGE |======= */}
          <motion.img
            initial={{ opacity: 0, scale: 0.75, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            src="/hero/image.png"
            alt="hero-image"
          />
        </div>
      </motion.div>

      {/* =======| GRADIENT |======= */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.8 }}
        className="gradient01"
      />
    </section>
  );
}

export default Hero;
