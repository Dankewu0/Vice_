import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex justify-between gap-15">
        <Link
          href="popular"
          className="bg-gray-700 text-white hover:scale-110 transition-transform duration-300 p-4 rounded"
        >
          <div>
            <h1 className="text-2xl"> Популярные сборки ПК </h1>
            <p className="pt-5"> Популярные сборки пк </p>
            <p> со всех магазинов </p>
          </div>
        </Link>
        <Link
          href="made"
          className="bg-gray-700 text-white hover:scale-110 transition-transform duration-300 p-4 rounded"
        >
          <div>
            <h1 className="text-2xl">Популярные товары</h1>
            <p className="pt-5">Товары которые чаще</p>
            <p>всего покупают люди</p>
          </div>
        </Link>
        <Link
          href="made"
          className="bg-gray-700 text-white hover:scale-110 transition-transform duration-300 p-4 rounded"
        >
          <div>
            <h1 className="text-2xl"> Готовые сборки ПК </h1>
            <p className="pt-5"> Сборки ПК </p>
            <p> от магазина Вайс </p>
          </div>
        </Link>
      </section>
      <section className="flex items-center pt-20 h-[40]">
        <div className="bg-gray-700 text-white gap-15 p-4 rounded">
          <Link href="defect">Уцененные товары</Link>
          <p className="pt-5">
            <Link href="discount">Товары со скидкой</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
