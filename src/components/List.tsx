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
          className=" bg-gray-200/90 rounded-lg p-3"
        >
          <h2 className="font-bold text-lg text-gray-800 ">
            {statusToTitleObject[list.status]}
            <span className="text-gray-500 bg-teal-200/80 rounded-full ml-2 px-2 text-sm ">
              {list.tasks.length}
            </span>
          </h2>
          <Droppable droppableId={list.status} direction="vertical">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={
                  "pb-2 rounded-lg shadow-sm space-y-2 bg-gray-100/90 " +
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
                      >
                        {task.title}
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default List;
