import ProductCard from "@/app/_components/ProductCard";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { fetchData } from "@/app/lib/api";
import Loading from "@/app/_components/Loading";
import ProductCardSkeleton from "@/app/_components/ProductCardSkeleton";

const categories = {
  Phones: "Смартфоны и Фототехника",
  Computer: "Комплектующие для ПК",
  Audio: "TV, Консоли, Аудио",
  Laptops: "ПК, Ноутбуки, Периферия",
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
  const products = await fetchData(`/Product?category=${key}`);
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
        products.map((product: any) => (
          <ProductCard
            key={product.id}
            id={product.id}
            src={product.image}
            alt={product.alt}
            title={product.title}
            price={product.price}
          />
        ))
      )}
    </main>
  );
}
