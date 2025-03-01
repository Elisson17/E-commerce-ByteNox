"use client";
import ButtomProvider from "@/components/buttons/ButtomProvider";
import { Input } from "@/components/Input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function UserForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Dados do formulário:", formData);

    if (formData.email === "teste@teste.com" && formData.password === "123456") {
      console.log("Login sucesso");
      router.push("/home");
    } else {
      console.log("Credenciais inválidas");
    }
  };

  return (
    <>
      <div>
        <form
          aria-label="Formulário de autenticação"
          role="form"
          onSubmit={handleSubmit}
        >
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <Input
            id="password"
            label="Senha"
            type="password"
            placeholder="Senha"
            required
            onChange={handleChange}
          />
          <button type="submit">Entrar</button>
        </form>
        <ButtomProvider provider="google" callbackUrl="/" icon={FaGoogle} />
      </div>
    </>
  );
}
