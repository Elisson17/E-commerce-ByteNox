"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCartShopping } from "react-icons/fa6";

export default function CartButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <motion.button
      whileHover={{ rotate: [-10, 7, -10, 0] }}
      whileTap={{ scale: 1.2 }}
      className="relative"
      onClick={() => {
        setClicked(true);
        setTimeout(() => setClicked(false), 300);
      }}
    >
      <motion.div
        animate={clicked ? { y: -5, opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaCartShopping className="w-6 h-6 text-white" />
      </motion.div>
    </motion.button>
  );
}
