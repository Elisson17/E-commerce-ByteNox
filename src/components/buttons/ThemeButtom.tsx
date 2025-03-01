"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "motion/react";
const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="relative flex items-center justify-center rounded-lg w-7 h-7"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <AnimatePresence>
        <motion.div
          key={resolvedTheme === "dark" ? "dark" : "light"}
          initial={{ y: 10, opacity: 0, rotate: -30 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -10, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute"
        >
          {resolvedTheme === "dark" ? (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SunIcon className="h-7 w-7 text-white transition-colors duration-500" />
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.1, rotate: -15 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <MoonIcon className="h-7 w-7 text-black transition-colors duration-500" />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeButton;
