"use client";

import { useQuery } from "@tanstack/react-query";
import UserBucket from "../bucket/Bucket";
import { getBuckets } from "@/actions/getBuckets";
import BucketSkeleton from "../bucket/BuckerSkeleton";
import ErrorMessage from "../Error";
import Link from "next/link";
import { AUDIO_9_SEC } from "@/api/routes";
import AudioPlayer from "./_components/Audio";

export default function Home() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["buckets"],
    queryFn: async () => getBuckets(),
    refetchOnWindowFocus: false,
    staleTime: 604800000,
  });

  if (isError)
    return (
      <ErrorMessage message="Something went wrong. Please try again later." />
    );
  if (isLoading) return <BucketSkeleton />;

  return (
    <div className="grid grid-cols-12 col-span-12 gap-4">
      <div className="fixed left-0 bottom-0 mb-4 ml-4">
        <AudioPlayer
          fileSrc={`${process.env.NEXT_PUBLIC_API_URL}${AUDIO_9_SEC}`}
        />
      </div>

      {data?.response?.map(({ _id, name }) => (
        <Link
          key={_id}
          href={{ pathname: "/bucket", query: { name } }}
          className="col-span-6"
        >
          <UserBucket name={name} />
        </Link>
      ))}
    </div>
  );
}
