"use client";
import { signIn } from "next-auth/react";
import React from "react";

interface ButtomProviderProps {
  provider: string;
  callbackUrl: string;
  icon: React.ElementType;
}

function ButtomProvider({ provider, callbackUrl, icon: Icon }: ButtomProviderProps) {
  return (
    <div>
      <button
        onClick={() => signIn(`${provider}`, { callbackUrl: `${callbackUrl}` })}
        className="flex gap-2 items-center border border-neutral-900 p-2 rounded-md"
      >
        <Icon size={20} />
        Login com o {provider}
      </button>
    </div>
  );
}

export default ButtomProvider;
