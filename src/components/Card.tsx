import useBoardStore from "@/store/boardStore";
import { XCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  task: Task;
  taskIndex: number;
};

function Card({ taskIndex, task }: Props) {
  const searchText = useBoardStore((state) => state.searchText);
  const deleteTask = useBoardStore((state) => state.deleteTask);
  if (
    searchText &&
    !task.title.toLowerCase().includes(searchText.toLocaleLowerCase())
  )
    return null;

  return (
    <div className="flex justify-between items-center mx-2 ml-3">
      <span>{task.title}</span>
      <button onClick={() => deleteTask(taskIndex, task)}>
        <XCircleIcon className=" w-8 h-8 text-red-500/70 inline" />
      </button>
    </div>
  );
}

export default Card;
