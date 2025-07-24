"use client";

import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function Favorite() {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("favourites");
    if (!stored) {
      setLoading(false);
      return;
    }

    const favIds: number[] = JSON.parse(stored);
    if (favIds.length === 0) {
      setLoading(false);
      return;
    }

    const fetchFavorites = async () => {
      try {
        const queryString = favIds.join(",");
        const res = await fetch(`/api/products/by-ids?ids=${queryString}`);
        if (!res.ok) throw new Error();

        const data: Product[] = await res.json();
        setFavorites(data);
      } catch {
        setFavorites([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) return <div>Загрузка...</div>;

  if (favorites.length === 0) {
    return <div>Избранное пусто</div>;
  }

  return (
    <ul>
      {favorites.map((item) => (
        <li key={item.id}>
          {item.name} — {item.price} ₽
        </li>
      ))}
    </ul>
  );
}
