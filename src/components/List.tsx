import useBoardStore from "@/store/boardStore";
import { Draggable, Droppable } from "react-beautiful-dnd";
import AddBtn from "./AddBtn";
import Card from "./Card";

interface Props {
  list: List;
}

const statusToTitleObject: { [key in Status]: string } = {
  todo: "To Do",
  doing: "Doing",
  done: "Done",
};

const List = ({ list }: Props) => {
  const searchText = useBoardStore((state) => state.searchText);
  const sortedTasks = list.tasks.toSorted((a, b) => +b.$id - +a.$id);
  console.log(sortedTasks);

  return (
    <div className=" bg-gray-200/90 rounded-lg p-4  ">
      <div className="flex justify-between px-5 items-center">
        <div className="w-9"></div>
        <h2 className="font-bold text-lg text-gray-800 pt-1 ">
          {statusToTitleObject[list.status]}
          <span className="text-gray-500 bg-green-200/90 rounded-full ml-2 px-2 text-sm  ">
            {!searchText
              ? list.tasks.length
              : list.tasks.filter((task) =>
                  task.title
                    .toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase())
                ).length}
          </span>
        </h2>
        <div className="pt-1">
          <AddBtn status={list.status} />
        </div>
      </div>
      <Droppable droppableId={list.status} direction="vertical" type="card">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={
              "p-3 rounded-md " + (snapshot.isDraggingOver && "bg-green-100/90")
            }
          >
            {sortedTasks.map((task, index) => (
              <Draggable key={task.title} index={index} draggableId={task.$id}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={
                      " bg-gray-100/90 rounded-lg shadow-sm mb-2 py-1 "
                    }
                  >
                    <Card taskIndex={index} task={task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default List;
