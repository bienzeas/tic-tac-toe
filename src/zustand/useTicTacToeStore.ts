import { create } from "zustand";
import { combine } from "zustand/middleware";
import initialGrid from "../static/initialGrid";

const useTicTacToeStore = create(
  combine(
    {
      grid: initialGrid,
      xTurn: true,
      xMoves: [] as number[],
      oMoves: [] as number[],
    },
    (set, get) => ({
      addDrawable: (coord: number, drawable: string) =>
        set((state) => {
          const index = state.grid.findIndex((item) => item.coord === coord);
          if (index !== -1) {
            const updatedGrid = [...state.grid];
            updatedGrid[index] = {
              ...updatedGrid[index],
              filled: true,
              drawable,
            };
            if (state.xTurn) {
              return {
                grid: updatedGrid,
                xTurn: !state.xTurn,
                xMoves: [...state.xMoves, coord],
              };
            } else {
              return {
                grid: updatedGrid,
                xTurn: !state.xTurn,
                oMoves: [...state.oMoves, coord],
              };
            }
          }
          return state;
        }),
      reset: () =>
        set({ grid: initialGrid, xTurn: true, xMoves: [], oMoves: [] }),
    })
  )
);

export default useTicTacToeStore;
