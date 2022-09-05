import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "src/store";

export interface CounterState {
  value: number;
}

const initialStateCounter: CounterState = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState: initialStateCounter,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increseByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decreseByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    resetToNum: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, increseByAmount, decreseByAmount, resetToNum } = CounterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;
export default CounterSlice.reducer;
