"use client";

import Image from "next/image";
import emptyListImage from '@/public/assets/photos/list2.jpg'

export default function EmptyList() {
  return (
    <div className="w-full flex justify-center">
      <Image
        src={emptyListImage}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}
