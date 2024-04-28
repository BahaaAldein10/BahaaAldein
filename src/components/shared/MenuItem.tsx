"use client";

import { menuItemVariants } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

type MenuItemProps = {
  label: string;
  route: string;
  handleClick: () => void;
};

function MenuItem({ label, route, handleClick }: MenuItemProps) {
  return (
    <motion.li variants={menuItemVariants} className="p-4 text-white">
      <Link
        href={route}
        className="relative p-2 pg-24 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:rounded-2xl hover:before:w-full before:duration-300"
        onClick={handleClick}
      >
        {label}
      </Link>
    </motion.li>
  );
}

export default MenuItem;
