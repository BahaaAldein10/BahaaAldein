"use client";

import { navLinks } from "@/constants";
import { navigationVariants } from "@/lib/utils";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

type NavigationMenuProps = {
  isOpen: boolean;
  handleClick: () => void;
};

function NavigationMenu({ isOpen, handleClick }: NavigationMenuProps) {
  return (
    <motion.ul
      variants={navigationVariants}
      className={`fixed top-0 right-0 flex-center flex-col bg-primary z-10 w-full h-screen transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {navLinks.map((link, index) => (
        <MenuItem
          key={index}
          label={link.label}
          route={link.route}
          handleClick={handleClick}
        />
      ))}
    </motion.ul>
  );
}

export default NavigationMenu;
