import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import getTodosGroupedByStatus from "./lib/getTodosGroupedByStatus";

interface BoardState {
  board: Board;
  getBoard: () => void;
}

const useBoardStore = create<BoardState>()(
  /* (set) => ({
    board: {
      columns: new Map<Status, Column>(),
    },
    getBoard: async () => {
      const board = await getTodosGroupedByStatus();
      set({ board });
    },
  }) */
  devtools(
    persist(
      (set) => ({
        board: {
          columns: new Map<Status, Column>(),
        },
        getBoard: async () => {
          const board = await getTodosGroupedByStatus();
          set({ board });
        },
      }),
      {
        name: "board-storage",
      }
    )
  )
);

export default useBoardStore;
