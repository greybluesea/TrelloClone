import React from "react";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  list: List;
  index: number;
}

const List = ({ list, index }: Props) => {
  return (
    <Draggable draggableId={list.status} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {list.status}
        </div>
      )}
    </Draggable>
  );
};

export default List;
