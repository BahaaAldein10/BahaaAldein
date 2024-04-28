"use client";

import { navLinks } from "@/constants";
import { navVariants } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="container flex-between">
        {/* =======| LOGO |======= */}
        <Link href="/" className="w-fit">
          <Image src="/hero/logo.png" alt="logo" width={160} height={160} />
        </Link>

        {/* =======| LINKS |======= */}
        <ul className="lg:flex hidden items-center gap-2">
          {navLinks.map((link, index) => [
            <li key={index} className="relative p-2">
              <Link
                href={link.route}
                className="pg-16 hover:text-secondary duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-secondary before:rounded-2xl hover:before:w-full before:duration-300"
              >
                {link.label}
              </Link>
            </li>,
          ])}
        </ul>

        {/* =======| MOBILE NAV |======= */}
        <MobileNav />
      </div>

      {/* =======| WAVE ANIMATION |======= */}
      {/* <Wave /> */}
    </motion.nav>
  );
}

export default Navbar;
