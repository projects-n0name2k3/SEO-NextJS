export default function ProductDetailSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-8 animate-pulse">
      <div className="aspect-square bg-gray-200 rounded-lg"></div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
          <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
          <div className="h-6 w-32 bg-gray-200 rounded"></div>
        </div>
        <div className="h-40 bg-gray-200 rounded"></div>
        <div className="flex flex-col gap-4">
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
