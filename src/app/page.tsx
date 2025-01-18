import Header from "@/components/Header";
import ProductCarousel from "@/components/Products/ProductCarousel";
import { categories } from "@/constants";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <div className="mt-14 p-4">
        <h1 className="text-3xl font-bold mb-6 text-white">Produtos</h1>
        <ProductCarousel categories={categories} />
      </div>
    </main>
  );
}
