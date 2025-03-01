"use client";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import SignOutButton from "./buttons/SignOutButton";
import { useSession } from "next-auth/react";
import Image from "next/image";
import logo from "../../public/image/logo.png";
import Link from "next/link";
import LinkItemMenu from "@/utils/LinkItemMenu";
import { LinkItemHeader } from "@/constant/LinkItemHeader";
import ThemeButtom from "./buttons/ThemeButtom";
import GlobalSearch from "./GlobalSearch";
import CartButtom from "./buttons/CartButtom";
import FavoriteButton from "./buttons/FavoriteButton";
import LoginButton from "./buttons/LoginButton";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="fixed z-50 top-0 flex w-full bg-gray-800 px-4 py-1 flex-col">
      <div className="grid grid-cols-5 items-center w-full">
        <div className="flex ">
          <Link href="/">
            <Image src={logo} alt="Logo" width={180} height={180} />
          </Link>
        </div>

        <div className="flex w-full justify-center col-span-3">
          <GlobalSearch />
        </div>

        <div className="flex justify-end items-center gap-4 ">
          {session?.user ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-sm">
                Olá, {session.user.name}
              </span>
              <SignOutButton label="Sair" icon={FaSignOutAlt} />
            </div>
          ) : (
            <LoginButton />
          )}
          <ThemeButtom />
          <FavoriteButton />
          <CartButtom />
        </div>
      </div>

      <div className="flex flex-row gap-9 items-center justify-center text-white">
        {LinkItemHeader.map((item, index) => (
          <LinkItemMenu key={index} name={item.name} href={item.pathname} />
        ))}
      </div>
    </header>
  );
}
