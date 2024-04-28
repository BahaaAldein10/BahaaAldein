"use client";

import { socials } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";

function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center">
      <div className="container space-y-4">
        {/* =======| LOGO |======= */}
        <Link href="/" className="block m-auto w-fit">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            src="/hero/logo.png"
            alt="logo"
            width={160}
            height={160}
          />
        </Link>

        {/* =======| SOCIALS |======= */}
        <ul className="flex justify-center gap-4">
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
              className="p-2 rounded-full glowing-shadow duration-300 hover:bg-primary"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 + index * 0.2 }}
                src={social.image}
                alt={social.title}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </ul>

        {/* =======| COPYRIGHT |======= */}
        <motion.h6
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="pg-16"
        >
          &copy; {currentYear} Bahaa Aldein | Crafting beautiful and functional
          designs.
        </motion.h6>
      </div>
    </footer>
  );
}

export default Footer;
