"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

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
      className="flex items-center justify-center  rounded-lg transition-colors"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-7 w-7 text-white transition-colors duration-200  hover:text-orange-light  dark:hover:text-orange-dark " />
      ) : (
        <MoonIcon className="h-7 w-7 transition-colors duration-200  hover:text-orange-light dark:hover:bg-secondary-dark dark:hover:text-orange-dark " />
      )}
    </button>
  );
};

export default ThemeButton;
