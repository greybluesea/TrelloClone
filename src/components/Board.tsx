import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

type Props = {};

function Board({}: Props) {
  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => <div></div>}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
