import ProductCard from "@/app/_components/ProductCard";
import { notFound } from "next/navigation";
import { fetchData } from "@/app/lib/api";
import ProductCardSkeleton from "@/app/_components/ProductCardSkeleton";

const categories = {
  Phones: "Смартфоны и Фототехника",
  Computer: "Комплектующие для ПК",
  Audio: "TV, Консоли, Аудио",
  Laptops: "ПК, Ноутбуки, Периферия",
};

const categoryIds = {
  Phones: 1,
  Computer: 2,
  Audio: 3,
  Laptops: 4,
};

export default async function CategoryPage({
                                             params,
                                           }: {
  params: { category: string };  // Просто объект, не промис
}) {
  const key = params.category;

  if (!(key in categories)) return notFound();

  const categoryTitle = categories[key as keyof typeof categories];
  if (!categoryTitle) return notFound();

  const categoryId = categoryIds[key as keyof typeof categoryIds];
  if (!categoryId) return notFound();

  // Получаем данные (в API предполагаем, что фильтрация происходит по category_id)
  const productsResponse = await fetchData(`/products?id_category=${categoryId}`);
  const products = productsResponse.data;


  return (
    <main>
      <h1 className="text-2xl font-bold mb-6">{categoryTitle}</h1>

      {products.length === 0 ? (
        <div className="flex flex-wrap gap-4 p-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 p-4">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              id={product.id}
              src={product.image}
              alt={product.description || "Product image"}
              title={product.name || "Без названия"}
              price={product.price || 0}
            />
          ))}
        </div>
      )}
    </main>
  );
}
