"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function LoginButton() {
  const router = useRouter();

  return (
    <div className="flex gap-1 items-center text-white font-bold text-base">
      <div className="flex flex-row items-center gap-1">
        <MdOutlineAccountCircle size={35} />
        <button
          onClick={() => router.push("/auth/login")}
          className="hover:text-green-400 "
        >
          Entrar
        </button>
      </div>
      /
      <button
        onClick={() => router.push("/auth/register")}
        className="hover:text-green-400"
      >
        Cadastrar
      </button>
    </div>
  );
}
