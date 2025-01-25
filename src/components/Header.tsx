"use client";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import SignOutButton from "./SignOutButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/image/logo.png";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <header className="fixed z-50 top-0 left-0 flex h-18 w-full items-center justify-between bg-white px-4">
      <Link href="/" className="w-40">
        <Image src={logo} alt="Logo" width={160} height={160} />
      </Link>
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
