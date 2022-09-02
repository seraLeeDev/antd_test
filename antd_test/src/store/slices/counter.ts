import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

export interface ICounter {
  result: number;
}
const initialCounterState: ICounter = {
  result: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      console.log(state);
      state.result += 1;
    },
    decrement: (state) => {
      state.result -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.result += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.result; //getState를 변수로 미리 빼둠

export default counterSlice.reducer;
