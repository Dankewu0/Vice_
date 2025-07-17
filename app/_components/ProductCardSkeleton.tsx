import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="bg-gray-800 rounded w-64 h-72 text-white p-4 space-y-3">
      <Skeleton className="w-full h-40 rounded" />
      <Skeleton className="w-3/4 h-4" />
      <Skeleton className="w-1/3 h-4" />
    </div>
  );
}
