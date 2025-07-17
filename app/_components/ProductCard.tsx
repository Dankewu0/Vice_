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
    <div className="bg-gray-700 rounded w-100 h-75 text-white p-4">
      <section className="relative w-full h-30">
        <Image src={src} alt={alt} />
      </section>
      <section>{title}</section>
      <section>{price}</section>
    </div>
  );
}
