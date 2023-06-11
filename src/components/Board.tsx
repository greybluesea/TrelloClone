"use client";

import useBoardStore from "@/boardStore";
import React, { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

type Props = {};

function Board({}: Props) {
  const getBoard = useBoardStore((state) => state.getBoard);

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <h1>Hello</h1>
    /* <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => <div></div>}
      </Droppable>
    </DragDropContext> */
  );
}

export default Board;
