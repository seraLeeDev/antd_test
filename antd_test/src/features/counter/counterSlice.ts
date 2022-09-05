import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "src/store";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = CounterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;
export default CounterSlice.reducer;
