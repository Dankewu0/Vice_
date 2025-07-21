import Image from "next/image";
import { Heart as HeartIcon } from "lucide-react";
import { useState, useEffect } from "react";

type ProductCardProps = {
  id: number;
  src: string;
  alt: string;
  title: string;
  price: number;
};

export default function ProductCard({
                                      id,
                                      src,
                                      alt,
                                      title,
                                      price,
                                    }: ProductCardProps) {
  const [isFavourite, setIsFavourite] = useState(false);

  // Загружаем состояние из localStorage при монтировании
  useEffect(() => {
    const stored = localStorage.getItem("favourites");
    if (stored) {
      const favs: number[] = JSON.parse(stored);
      setIsFavourite(favs.includes(id));
    }
  }, [id]);

  // Функция переключения избранного
  const toggleFavourite = () => {
    const stored = localStorage.getItem("favourites");
    const favs: number[] = stored ? JSON.parse(stored) : [];

    let updated: number[];

    if (favs.includes(id)) {
      updated = favs.filter((favId) => favId !== id);
      setIsFavourite(false);
    } else {
      updated = [...favs, id];
      setIsFavourite(true);
    }

    localStorage.setItem("favourites", JSON.stringify(updated));
  };

  return (
    <div className="bg-gray-700 rounded w-full h-75 text-white p-4 relative">
      <section className="h-48 mb-4 relative">
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
        {/* Кнопка-сердце в углу изображения */}
        <button
          onClick={toggleFavourite}
          className="absolute top-2 right-2 z-10 bg-black/50 rounded-full p-1"
          aria-label="Добавить в избранное"
        >
          <HeartIcon
            className={`w-6 h-6 ${isFavourite ? "fill-red-500 stroke-red-500" : "stroke-white"}`}
          />
        </button>
      </section>

      <section className="text-lg font-semibold">{title}</section>
      <section className="text-sm">{price} ₽</section>
    </div>
  );
}
