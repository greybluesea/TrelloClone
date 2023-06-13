"use client";

import useBoardStore from "@/boardStore";
import { list } from "postcss";
import React, { useEffect } from "react";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import List from "./List";

function Board() {
  const getBoard = useBoardStore((state) => state.getBoard);
  const board = useBoardStore((state) => state.board);
  const setBoard = useBoardStore((state) => state.setBoard);

  useEffect(() => {
    getBoard();
  }, []);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;
    console.log(result);

    if (!destination || !source) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (type === "list") {
      const entriesArray = Array.from(board.lists.entries());
      const [removed] = entriesArray.splice(source.index, 1);
      entriesArray.splice(destination.index, 0, removed);
      const rearrangedLists = new Map(entriesArray);
      setBoard({ lists: rearrangedLists });
    }

    /*  const listsArray = Array.from(board.lists);
    console.log(Number(source.droppableId)); */

    if (type === "card") {
      const listsArray = Array.from(board.lists);
      const sourceListArray = listsArray.find(
        (list) => list[0] === source.droppableId
      );
      const destinationListArray = listsArray.find(
        (list) => list[0] === destination.droppableId
      );

      const sourceList: List = {
        status: sourceListArray![0],
        tasks: [...sourceListArray![1].tasks],
      };

      const destinationList: List = {
        status: destinationListArray![0],
        tasks: [...destinationListArray![1].tasks],
      };

      const sourceTasks = sourceList.tasks;
      const [sourceTask] = sourceTasks.splice(source.index, 1);

      if (source.droppableId === destination.droppableId) {
        sourceTasks.splice(destination.index, 0, sourceTask);
        const newLists = new Map(board.lists);
        newLists.set(sourceList.status, {
          status: sourceList.status,
          tasks: sourceTasks,
        });

        setBoard({ lists: newLists });
      } else {
      }
    }
    return;
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="list">
        {(provided) => (
          <div
            className="grid grid-cols-1 max-w-sm md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 gap-5 lg:max-w-7xl mx-auto px-3 text-center"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Array.from(board.lists.entries()).map(([status, list], index) => (
              <Draggable key={status} draggableId={list.status} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <List key={status} list={list}></List>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
