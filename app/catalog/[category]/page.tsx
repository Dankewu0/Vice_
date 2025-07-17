import ProductCard from "@/app/_components/ProductCard";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchData } from "@/app/lib/api";

const categories = {
  Phones: "Смартфоны и Фототехника",
  Computer: "Комплектующие для ПК",
  Audio: "TV, Консоли, Аудио",
  Laptops: "ПК, Ноутбуки, Периферия",
};

export async function CategoryPage({
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
    <main className="relative h-screen">
      <h1 className="absolute left-50 -translate-x-1/2 text-2xl font-bold">
        {categoryTitle}
      </h1>
      {products.map((product: any) => (
        <ProductCard
          key={product.id}
          src={product.image}
          alt={product.alt}
          title={product.title}
          price={product.price}
        />
      ))}
    </main>
  );
}

//id, src, alt, title, price
