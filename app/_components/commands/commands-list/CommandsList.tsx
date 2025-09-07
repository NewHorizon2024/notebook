"use client";

import { getCommands } from "@/actions/getCommands";
import { Command } from "@/actions/types";
import { useEffect, useState } from "react";
import CommandItem from "../command-item/CommandItem";

export default function CommandsList() {
  const [error, setError] = useState<boolean>(false);
  const [commands, setCommands] = useState<Command[]>([]);
  useEffect(() => {
    async function startGetCommands() {
      const { error, response } = await getCommands();
      if (error) {
        setError(true);
        return;
      }
      if (response) {
        console.log(response)
        setCommands(response);
      }
    }
    startGetCommands();
  }, []);
  if (error) return <b>Something went wrong</b>;
  return (
    <ul className="flex flex-col gap-4 col-span-full">
      {commands.map(({ id, title, command }) => (
        <CommandItem key={id} title={title} command={command} />
      ))}
    </ul>
  );
}
