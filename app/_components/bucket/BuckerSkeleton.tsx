"use client";

export default function BucketSkeleton() {
  return (
    <div className="flex items-center justify-center h-32 space-x-2">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-2 h-10 rounded-full bg-gradient-to-b from-blue-500 to-blue-300 animate-electric`}
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
}
