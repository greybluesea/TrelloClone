"use client";

import useBoardStore from "@/boardStore";
import { list } from "postcss";
import React, { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import List from "./List";

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
      <Droppable droppableId="board" direction="horizontal" /* type="lists" */>
        {(provided) => (
          <div
            className="grid grid-cols-1 max-w-sm md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 gap-5 lg:max-w-7xl mx-auto px-3 text-center"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Array.from(board.lists.entries()).map(([status, list], index) => (
              <List key={status} list={list} index={index}></List>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
