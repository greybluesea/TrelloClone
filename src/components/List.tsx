import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Card from "./Card";

interface Props {
  list: List;
  index: number;
}

const statusToTitleObject: { [key in Status]: string } = {
  todo: "To Do",
  doing: "Doing",
  done: "Done",
};

const List = ({ list, index }: Props) => {
  return (
    <Draggable draggableId={list.status} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className=" bg-gray-200/90 rounded-lg p-4  ">
            <div className="flex justify-between px-5 items-center">
              <div className="w-9"></div>
              <h2 className="font-bold text-lg text-gray-800 pt-1 ">
                {statusToTitleObject[list.status]}
                <span className="text-gray-500 bg-green-200/90 rounded-full ml-2 px-2 text-sm  ">
                  {list.tasks.length}
                </span>
              </h2>
              <div className="pt-1">
                <button>
                  <PlusCircleIcon className=" w-8 h-8 text-green-600/70 inline " />
                </button>
              </div>
            </div>
            <Droppable
              droppableId={list.status}
              direction="vertical"
              type="cards"
            >
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={
                    "p-3 rounded-md " +
                    (snapshot.isDraggingOver && "bg-green-100/90")
                  }
                >
                  {list.tasks.map((task, index) => (
                    <Draggable
                      key={task.title}
                      index={index}
                      draggableId={task.$id}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className={
                            " bg-gray-100/90 rounded-lg shadow-sm mb-2 py-1 "
                          }
                        >
                          <Card task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default List;
