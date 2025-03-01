"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

export default function FavoriteButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-6 h-6"
    >
      <AnimatePresence mode="wait">
        {isHovered ? (
          <motion.div
            key="filled"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0"
          >
            <FaHeart className="w-6 h-6 text-red-500" />
          </motion.div>
        ) : (
          <motion.div
            key="outline"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0"
          >
            <FaRegHeart className="w-6 h-6 text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
