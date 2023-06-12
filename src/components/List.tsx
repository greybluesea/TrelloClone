import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

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
          <div className=" bg-gray-200/90 rounded-lg p-4 ">
            <div className="flex justify-between px-3 ">
              <div className="w-9"></div>
              <h2 className="font-bold text-lg text-gray-800 pt-1 ">
                {statusToTitleObject[list.status]}
                <span className="text-gray-500 bg-teal-200/80 rounded-full ml-2 px-2 text-sm ">
                  {list.tasks.length}
                </span>
              </h2>
              <div>
                <button>
                  <PlusCircleIcon className="w-8 h-8 text-gray-700 inline" />
                </button>
              </div>
            </div>
            <Droppable droppableId={list.status} direction="vertical">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="p-3"
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
                            " bg-gray-100/90 rounded-lg shadow-sm mb-2 py-1 " +
                            (snapshot.isDraggingOver && "bg-green-100/90")
                          }
                        >
                          {task.title}
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
