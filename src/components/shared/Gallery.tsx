"use client";

import { gallery } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Title from "./Title";

function Gallery() {
  const [isHovered, setIsHovered] = useState(-1);

  const handleEnter = (index: number) => {
    setIsHovered(index);
  };

  const handleLeave = () => {
    setIsHovered(-1);
  };

  return (
    <section id="gallery" className="mt-5">
      <div className="container">
        {/* =======| TITLE |======= */}
        <Title
          mainTitle="Design Showcase"
          subTitle="A Gallery of MERN-Stack Marvels"
          smallTitle="Making Your Web Dreams a Reality"
        />

        {/* =======| CARDS |======= */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10">
          {gallery.map((item, index) => (
            <div key={index}>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="relative overflow-hidden rounded-2xl"
                onMouseEnter={() => {
                  handleEnter(index);
                }}
                onMouseLeave={handleLeave}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="rounded-2xl"
                />

                <div
                  className={`absolute bottom-0 left-0 flex flex-col justify-center w-full bg-gradient-to-b from-tertiary via-transparent via-0% to-secondary rounded-2xl duration-500 ease-out overflow-hidden ${
                    isHovered === index ? "opacity-100 h-full" : "opacity-0 h-0"
                  }`}
                >
                  <h1 className="pg-24 text-center">{item.title}</h1>
                  <h2 className="pg-16 text-center">{item.description}</h2>

                  <div className="flex justify-center gap-4">
                    <Link href={item.webUrl} target="_blank" className="mt-4">
                      <Image
                        src={"/gallery/eye.png"}
                        alt="preview"
                        width={40}
                        height={40}
                        className="m-auto"
                      />
                    </Link>

                    <Link href={item.gitUrl} target="_blank" className="mt-4">
                      <Image
                        src={"/gallery/github.png"}
                        alt="github"
                        width={40}
                        height={40}
                        className="m-auto"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
