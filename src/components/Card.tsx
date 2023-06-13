import useBoardStore from "@/boardStore";
import { XCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  task: Task;
};

function Card({ task }: Props) {
  const searchText = useBoardStore((state) => state.searchText);
  if (
    searchText &&
    !task.title.toLowerCase().includes(searchText.toLocaleLowerCase())
  )
    return null;

  return (
    <div className="flex justify-between items-center mx-2 ml-3">
      <span>{task.title}</span>
      <button>
        <XCircleIcon className=" w-8 h-8 text-red-500/70 inline" />
      </button>
    </div>
  );
}

export default Card;
