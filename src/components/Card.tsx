import useBoardStore from "@/store/boardStore";
import { XCircleIcon } from "@heroicons/react/24/solid";
import getURL from "@/lib/getURL";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  task: Task;
  taskIndex: number;
};

function Card({ taskIndex, task }: Props) {
  const searchText = useBoardStore((state) => state.searchText);
  const deleteTask = useBoardStore((state) => state.deleteTask);
  const [imageURL, setImageURL] = useState("");

  /* useEffect(() => {
    if (task.image) {
      const fetchImage = async () => {
        const url = await getURL(task.image!);
        if (url) {
          setImageURL(url.toString());
        }
      };
    }
  }, []); */

  if (
    searchText &&
    !task.title.toLowerCase().includes(searchText.toLocaleLowerCase())
  )
    return null;

  return (
    <div>
      <div className="flex justify-between items-center mx-2 ml-3 my-1 ">
        <span className="font-medium">{task.title}</span>
        <button onClick={() => deleteTask(taskIndex, task)}>
          <XCircleIcon className=" w-8 h-8 text-red-500/70 inline" />
        </button>
      </div>
      <div>
        {task.image && (
          <div className="h-full w-full rounded-b-md mt-2 -mb-1">
            <Image
              //src={imageURL}
              src={task.image.toString()}
              alt="task image"
              width={300}
              height={200}
              className="w-full rounded-b-md object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
