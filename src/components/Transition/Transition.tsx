"use client";
import { motion } from "framer-motion";

type TransitionProps = {
  children: React.ReactNode;
  initial?: object;
  animate?: object;
  transition?: object;
  className?: string;
};

function Transition({
  children,
  initial,
  animate,
  transition,
  className,
}: TransitionProps): JSX.Element {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      transition={{ ease: "easeInOut", duration: 0.3, ...transition }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default Transition;
