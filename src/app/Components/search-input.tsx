"use client";

import { Input } from "@/components/ui/input";
import { useSearchQueryStore } from "../Hooks/useSearchQueryStore";
import { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  const { query, setQuery } = useSearchQueryStore();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative border flex items-center justify-center w-full h-10 bg-white dark:bg-gray-800 rounded-md shadow-sm">
      <Input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full h-10 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
      />

      {query.trim().length > 0 ? (
        <IoCloseOutline
          className="absolute top-[12px] right-5 text-gray-500 cursor-pointer"
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.value = "";
            }
            setQuery("");
          }}
        />
      ) : (
        <FaSearch className="absolute top-[12px] right-5  text-gray-500 cursor-pointer" />
      )}
    </div>
  );
}
