"use client";

import { type ChangeEvent, useMemo, useState } from "react";
import { getCommands } from "@/actions/getCommands";
import CommandItem from "../command-item/CommandItem";
import { useQuery } from "@tanstack/react-query";
import ListItemsSkeleton from "@/skeletons/ListITemsSkeletons";
import { useSearchParams } from "next/navigation";
//import EmptyList from "./EmptyList";

export default function CommandsList() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const params = useSearchParams();
  const bucketName = params.get("name");

  const { data, isError, isLoading } = useQuery({
    queryKey: [bucketName],
    queryFn: async () => {
      if (!bucketName) throw new Error("No bucket name");
      return getCommands(bucketName);
    },
    refetchOnWindowFocus: false,
    staleTime: 604800000,
  });

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.response?.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  function handleSearchTerm(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  if (isError) return <b>Something went wrong</b>;
  if (isLoading) return <ListItemsSkeleton />;
  // if (!isLoading && !filteredData?.length) return <EmptyList />

  return (
    <div className="h-screen flex flex-col">
      {filteredData && filteredData.length > 0 && (
        <input
          onChange={handleSearchTerm}
          type="search"
          placeholder="Search by title"
          className="h-14 border-b-2 border-b-sky-800 p-2 outline-none w-full sticky top-0 bg-white z-10 shadow-sm"
        />
      )}

      <div className="flex-1 overflow-y-auto p-4 scrollbar-hide ">
        <ul className="flex flex-col gap-4 ">
          {filteredData?.map(({ id, title, command }) => (
            <CommandItem key={id} title={title} command={command} id={id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
