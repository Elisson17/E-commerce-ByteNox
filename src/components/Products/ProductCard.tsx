import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className=" bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={150}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-3 mb-2 text-black">{product.name}</h2>
      <p className="text-black text-sm mb-4  ">{product.description}</p>
      <strong className="block text-lg text-green-600 mb-4">
        R$ {product.price.toFixed(2).replace(".", ",")}
      </strong>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
