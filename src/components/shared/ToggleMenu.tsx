"use client";

import { MotionProps, motion } from "framer-motion";

type PathProps = {
  variants: {
    closed: { d: string; opacity?: number; stroke?: string };
    open: { d: string; opacity?: number; stroke?: string };
  };
  transition?: { duration: number };
  isOpen: boolean;
} & MotionProps;

type ToggleMenuProps = {
  toggle: () => void;
  isOpen: boolean;
};

const Path: React.FC<PathProps> = ({
  variants,
  transition,
  isOpen,
  ...motionProps
}) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={variants[isOpen ? "open" : "closed"].stroke}
    strokeLinecap="round"
    variants={variants}
    transition={transition}
    {...motionProps} // Spread any additional motion-specific props
  />
);

function ToggleMenu({ toggle, isOpen }: ToggleMenuProps) {
  return (
    <button
      onClick={toggle}
      className={`${isOpen ? "fixed top-5 md:right-10 right-5" : ""} z-10`}
    >
      <svg width="40" height="40" viewBox="0 0 22 22">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "#ff0040" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "#ffffff" },
          }}
          isOpen={isOpen}
        />
        <Path
          variants={{
            closed: {
              d: "M 2 9.423 L 20 9.423",
              opacity: 1, // Ensure it reappears when closed
              stroke: "#ff0040",
            },
            open: { d: "M 2 9.423 L 20 9.423", opacity: 0, stroke: "#ffffff" },
          }}
          transition={{ duration: 0.1 }}
          isOpen={isOpen}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          exit="closed"
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: "#ff0040" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "#ffffff" },
          }}
          isOpen={isOpen}
        />
      </svg>
    </button>
  );
}

export default ToggleMenu;
