import ProductCarousel from "@/components/Products/ProductCarousel";
import { categories } from "@/constants";
import React from "react";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-white">Produtos</h1>
      <ProductCarousel categories={categories} />
    </>
  );
}
