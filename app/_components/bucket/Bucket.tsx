"use client";

type UserBucketProps = Readonly<{
  name: string;
}>;

export default function UserBucket({ name }: UserBucketProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300 col-span-6">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">User Bucket</p>
        </div>
      </div>
    </div>
  );
}
