"use client"; // Use this if you are in Next.js App Router

import { motion } from "framer-motion";

export default function FadeInSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start slightly below and transparent
      whileInView={{ opacity: 1, y: 0 }} // Fade in when in view
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% in view
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
    >
      {children}
    </motion.div>
  );
}
