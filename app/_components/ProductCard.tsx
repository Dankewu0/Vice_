import Image from "next/image";

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
  return (
    <div className="bg-gray-700 rounded w-full h-75 text-white p-4">
      <section className="relative w-full h-48 mb-4">
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
      </section>
      <section className="text-lg font-semibold">{title}</section>
      <section className="text-sm">{price} ₽</section>
    </div>
  );
}
