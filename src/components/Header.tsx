"use client";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import SignOutButton from "./SignOutButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/image/logo.png";
import Link from "next/link";
import LinkItemMenu from "@/utils/LinkItemMenu";
import { LinkItemHeader } from "@/constant/LinkItemHeader";
import ThemeButtom from "./ThemeButtom";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <header className="fixed z-50 top-0 left-0 flex w-full bg-gray-600 px-4 flex-col">
      <div className="items-center justify-between flex w-full">
        <Link href="/" className="w-40">
          <Image src={logo} alt="Logo" width={135} height={135} />
        </Link>
        <div className="flex-grow mx-10 items-center justify-center">
          <input type="text" id="menu" className="w-full" />
        </div>
        <ThemeButtom />
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
      </div>
      <div className="flex flex-row gap-9 items-center justify-center pb-1 text-white">
        {LinkItemHeader.map((item, index) => (
          <LinkItemMenu key={index} name={item.name} href={item.pathname} />
        ))}
      </div>
    </header>
  );
}
