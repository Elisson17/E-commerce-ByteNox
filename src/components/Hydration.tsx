"use client";
import React, { ReactNode, useEffect, useState } from "react";

export const Hydration = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  // Wait till Next.js rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {isHydrated ? (
        <div className="">
          {children}
        </div>
      ) : null}
    </>
  );
};
