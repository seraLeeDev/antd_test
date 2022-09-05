import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "src/store";

export interface ICounter {
  result: number;
}

const initialCounterState: ICounter = {
  result: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.result += 1;
    },
    decrement: (state) => {
      state.result -= 1;
    },
    increseByAmount: (state, action: PayloadAction<number>) => {
      state.result += action.payload;
    },
    decreseByAmount: (state, action: PayloadAction<number>) => {
      state.result -= action.payload;
    },
    resetToNum: (state, action: PayloadAction<number>) => {
      state.result = action.payload;
    },
  },
});

export const { increment, decrement, increseByAmount, decreseByAmount, resetToNum } = counter.actions;

export const selectCount = (state: RootState) => state.counter.result;
export default counter.reducer;
