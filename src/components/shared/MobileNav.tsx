"use client";

import { sidebar } from "@/lib/utils";
import { motion, useCycle } from "framer-motion";
import Navigation from "./NavigationMenu";
import MenuToggle from "./ToggleMenu";

function MobileNav() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom="100%"
      className="flex lg:hidden"
    >
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-full bg-primary z-10"
        variants={sidebar}
      />
      <Navigation isOpen={isOpen} handleClick={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
    </motion.div>
  );
}

export default MobileNav;
