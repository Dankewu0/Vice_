// app/catalog/[category]/page.tsx

import { notFound } from "next/navigation";

const categories = {
  phones: "Смартфоны и Фототехника",
  computer: "Комплектующие для ПК",
  audio: "TV, Консоли, Аудио",
  laptops: "ПК, Ноутбуки, Периферия",
};

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const key = params.category;
  if (!(key in categories)) return notFound();

  const categoryTitle = categories[key as keyof typeof categories];

  if (!categoryTitle) return notFound(); // 404 если категории не существует

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">{categoryTitle}</h1>
      {/* Тут можно отрендерить товары в категории */}
    </main>
  );
}
