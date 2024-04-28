"use client";

import { skills } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "./Title";

function Skills() {
  return (
    <section id="skills" className="mt-5">
      <div className="container">
        {/* =======| TITLE |======= */}
        <Title
          mainTitle="MERN Stack Mastery"
          subTitle="Showcasing My Full-Stack Skills"
          smallTitle="Bringing Your Vision to Life with MERN Magic"
        />

        {/* =======| CARDS |======= */}
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10 mt-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="text-center"
            >
              <div className="m-auto p-5 lg:w-[150px] w-[120px] bg-tertiary rounded-full">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  width={1000}
                  height={1000}
                  className="rounded-2xl"
                />
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 + 0.5 }}
                className="mt-4 pg-24"
              >
                {skill.title}
              </motion.h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
