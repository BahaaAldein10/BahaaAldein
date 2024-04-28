"use client";

import { cards } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Title from "./Title";

function About() {
  return (
    <section id="about" className="mt-5">
      <div className="container">
        {/* =======| TITLE |======= */}
        <Title
          mainTitle="Design Magic"
          subTitle="for the Digital World"
          smallTitle="Bringing Your Brand to Life Through Stunning Web Design and Development"
          component={
            <Button asChild className="Button">
              <Link
                href="https://drive.google.com/file/d/1bxf3vTaBe1DgLzkVoQX37oQe70CVpsdR/view"
                target="_blank"
              >
                Download CV
              </Link>
            </Button>
          }
        />

        {/* =======| CARDS |======= */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mt-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: index < 3 ? 0.4 : 0 }}
              transition={{ duration: 1, delay: index * 0.3, ease: "easeOut" }}
              className="p-5 w-full text-center bg-tertiary rounded-2xl"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={1000}
                height={1000}
                className="w-full h-[220px] rounded-2xl"
              />

              <h1 className="mt-4 pg-24 text-primary">{card.title}</h1>
              <h2 className="pg-16">{card.description}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
