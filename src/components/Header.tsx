"use client";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import SignOutButton from "./SignOutButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <header className="fixed z-50 top-0 left-0 flex h-14 w-full items-center justify-between bg-white px-4">
      <span className="text-black rubik font-bold text-3xl">ByteNox</span>
      {session?.user ? (
        <div className="flex items-center gap-4">
          <span className="text-gray-600 text-sm">
            Olá, {session.user.name}
          </span>
          <SignOutButton label="Sair" icon={FaSignOutAlt} />
        </div>
      ) : (
        <button
          onClick={() => router.push("/auth")}
          className="border border-neutral-900 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Entrar
        </button>
      )}
    </header>
  );
}
