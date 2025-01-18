import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

export default function ProductCarousel({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="space-y-10">
      {categories.map((category) => (
        <div key={category.id} className="mx-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            {category.name}
          </h2>
          <Carousel
            className=""
            opts={{
              align: "start",
            }}
          >
            <CarouselContent>
              {category.products.map((product) => (
                <CarouselItem key={product.id} className="basis-1/3">
                  <div className="flex justify-center items-center flex-col p-4 border rounded-lg bg-white">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={150}
                      className="object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <strong className="block text-lg text-gray-900 mb-4">
                      R$ {product.price.toFixed(2).replace(".", ",")}
                    </strong>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ))}
    </div>
  );
}
