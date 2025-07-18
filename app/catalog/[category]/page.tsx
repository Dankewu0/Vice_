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
  params: { category: string };
}) {
  const key = params.category;

  if (!(key in categories)) return notFound();

  const categoryTitle = categories[key as keyof typeof categories];
  if (!categoryTitle) return notFound();

  const categoryId = categoryIds[key as keyof typeof categoryIds];
  if (!categoryId) return notFound();

  const productsResponse = await fetchData(
    `/products?category_id=${categoryId}`,
  );
  const products = productsResponse.data || productsResponse;

  return (
    <main>
      <h1>{categoryTitle}</h1>
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
              alt={product.alt || product.title}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      )}
    </main>
  );
}
