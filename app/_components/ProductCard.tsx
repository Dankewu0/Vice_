'use client';

import Image from "next/image";
import { Heart as HeartIcon, ShoppingCart } from "lucide-react";
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
  const [inCart, setInCart] = useState(false);

  // Инициализация избранного
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites") || "[]");
    setIsFavourite(favs.includes(id));
  }, [id]);

  // Инициализация корзины
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setInCart(cart.includes(id));
  }, [id]);

  const toggleFavourite = () => {
    const favs = JSON.parse(localStorage.getItem("favourites") || "[]");
    const updated = favs.includes(id)
      ? favs.filter((favId: number) => favId !== id)
      : [...favs, id];
    setIsFavourite(updated.includes(id));
    localStorage.setItem("favourites", JSON.stringify(updated));
  };

  const toggleCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updated = cart.includes(id)
      ? cart.filter((cartId: number) => cartId !== id)
      : [...cart, id];
    setInCart(updated.includes(id));
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <div className="bg-gray-800 rounded-xl text-white p-4 w-full max-w-sm shadow-md relative">
      <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        <button
          onClick={toggleFavourite}
          className="absolute top-2 right-2 z-10 bg-black/60 rounded-full p-1"
          aria-label="Добавить в избранное"
        >
          <HeartIcon
            className={`w-6 h-6 ${isFavourite ? "fill-red-500 stroke-red-500" : "stroke-white"}`}
          />
        </button>
      </div>

      <div className="text-lg font-semibold line-clamp-2 min-h-[3rem]">{title}</div>
      <div className="text-sm mb-2">{price} ₽</div>

      <button
        onClick={toggleCart}
        className={`mt-auto w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-colors ${
          inCart
            ? "bg-green-600 hover:bg-green-700"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        <ShoppingCart className="w-5 h-5" />
        {inCart ? "В корзине" : "Добавить в корзину"}
      </button>
    </div>
  );
}
