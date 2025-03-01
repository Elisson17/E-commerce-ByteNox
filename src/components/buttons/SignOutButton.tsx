"use client";
import { signOut } from "next-auth/react";
import React from "react";

interface SignOutButtonProps {
  label?: string;
  icon?: React.ElementType;
}

function SignOutButton({ label = "Sign Out", icon: Icon }: SignOutButtonProps) {
  return (
    <button
      onClick={() => signOut()}
      className="flex items-center gap-2 border border-neutral-900 p-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
    >
      {Icon && <Icon size={20} />}
      {label}
    </button>
  );
}

export default SignOutButton;
