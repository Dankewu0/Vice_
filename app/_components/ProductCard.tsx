import Image from "next/image";

export default function ProductCard({ src, alt, title, price }) {
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
