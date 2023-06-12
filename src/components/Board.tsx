"use client";

import useBoardStore from "@/boardStore";
import { list } from "postcss";
import React, { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";

type Props = {};

function Board({}: Props) {
  const getBoard = useBoardStore((state) => state.getBoard);
  const board = useBoardStore((state) => state.board);

  useEffect(() => {
    getBoard();
  }, []);

  const handleDragEnd = (result: DropResult) => {};

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="list">
        {(provided) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-7xl mx-auto px-3 text-center"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Array.from(board.lists.entries()).map(([status, list]) => (
              <div key={status}>{list.status}</div>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
