import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function GlobalSearch() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full ">
        <input
          type="text"
          placeholder="Buscar no site"
          className="w-full bg-gray-600 text-white px-4 py-2 pr-10 rounded-md shadow-lg border-none focus:outline-none"
        />
        <button>
          <HiMagnifyingGlass className="w-6 h-6 text-white absolute right-3 top-1/2 transform -translate-y-1/2" />
        </button>
      </div>
    </div>
  );
}
