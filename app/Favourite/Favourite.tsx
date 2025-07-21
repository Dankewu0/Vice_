"use client";

import React, { useState, useEffect } from "react";

type Product = {
  id: string;
  name: string;
};

export default function Favorite() {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  if (favorites.length === 0) {
    return <div>Избранное пусто</div>;
  }

  return (
    <ul>
      {favorites.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
