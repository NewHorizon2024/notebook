export default function ListItemsSkeleton() {
  return (
    <div className="space-y-6 p-4">
      <div className="animate-pulse space-y-4">
        <div className="h-30 bg-gray-300 rounded w-full"></div>
        <div className="h-30 bg-gray-300 rounded w-full"></div>
        <div className="h-30 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
}
