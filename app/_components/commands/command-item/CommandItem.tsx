"use client";

import CopyIcon from "@/icons/CopyIcon";
import { toast } from "react-toastify";
import DropdownList from "../command-item/DropdownList";

type CommandItemProps = Readonly<{
  title: string;
  command: string;
  id: string;
}>;
export default function CommandItem({ id, title, command }: CommandItemProps) {
  function handleCopyCommand() {
    navigator.clipboard
      .writeText(command)
      .then(() => toast("Cpied!"))
      .catch((err) => console.error("Copy failed", err));
  }
  return (
    <li className="p-5 rounded-md shadow-md bg-white flex flex-col gap-4 ">
      <div className="flex gap-3">
        <DropdownList commandId={id} />
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <pre className="p-2 bg-gray-200 rounded-md flex justify-between">
        <code>{command}</code>
        <button onClick={handleCopyCommand} className="cursor-pointer">
          <CopyIcon />
        </button>
      </pre>
    </li>
  );
}
