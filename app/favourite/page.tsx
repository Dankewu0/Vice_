import {Suspense} from "react";
import ProductCardSkeleton from "@/app/_components/ProductCardSkeleton";
import Favorite from "./Favorite";
export default function Favourite() {
  return (
    <main className="text-white">
      <h1>Избранное</h1>
      <Suspense fallback={<ProductCardSkeleton/>}>
        <Favorite />
      </Suspense>
    </main>
  )
}