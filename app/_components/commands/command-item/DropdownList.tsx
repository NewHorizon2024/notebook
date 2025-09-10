/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import EditIcon from "@/icons/EditIcon";
import TrashIcon from "@/icons/TrashIcon";
import deleteCommand from "@/actions/deleteCommand";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { startrefetch } from "@/redux/features/commandsSlice";

type DropdownListProps = Readonly<{ commandId: string }>;

export default function DropdownList({ commandId }: DropdownListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const { mutate, data } = useMutation({
    mutationKey: ["deleteCommand"],
    mutationFn: async (id: string) => deleteCommand(id),
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleDeleteCommand() {
    mutate(commandId);
  }

  useEffect(() => {
    if (data?.response?.deletedCount) {
      dispatch(startrefetch());
    }
  }, [data]);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(
          "flex flex-col justify-center items-center w-6 h-6 gap-[2px] cursor-pointer hover:bg-gray-400 rounded-md py-1",
          isOpen && "bg-gray-400"
        )}
      >
        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
        <span className="w-1.5 h-1.5 bg-gray-300  rounded-full"></span>
        <span className="w-1.5 h-1.5 bg-gray-300  rounded-full"></span>
      </button>

      {isOpen && (
        <div className="absolute left-full top-0 ml-2 w-40 bg-white rounded shadow-lg z-50">
          <ul className="py-2">
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <button className="cursor-pointer flex gap-2 w-full">
                <EditIcon />
                <span>Edit</span>
              </button>
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <button
                onClick={handleDeleteCommand}
                className="cursor-pointer flex gap-2 w-full"
              >
                <TrashIcon />
                <span>Delete</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
