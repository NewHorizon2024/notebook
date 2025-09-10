import EditIcon from "@/icons/EditIcon";
import TrashIcon from "@/icons/TrashIcon";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export default function DropdownList() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx("flex flex-col justify-center items-center w-6 h-6 gap-[2px] cursor-pointer hover:bg-gray-400 rounded-md py-1", isOpen && "bg-gray-400")}
      >
        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
        <span className="w-1.5 h-1.5 bg-gray-300  rounded-full"></span>
        <span className="w-1.5 h-1.5 bg-gray-300  rounded-full"></span>
      </button>

      {isOpen && (
        <div className="absolute left-full top-0 ml-2 w-40 bg-white rounded shadow-lg z-50">
          <ul className="py-2">
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <EditIcon />
              <span>Edit</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <TrashIcon />
              <span>Delete</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
