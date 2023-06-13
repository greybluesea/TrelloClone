"use client";
import useBoardStore from "@/boardStore";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

function Search() {
  const setSearchText = useBoardStore((state) => state.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex items-center space-x-5 bg-gray-100 rounded-md p-2 shadow-md"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 " />
      <input
        ref={ref}
        type="text"
        placeholder="Search"
        className="outline-none flex-1 py-1  bg-gray-100"
      />
    </form>
  );
}

export default Search;
