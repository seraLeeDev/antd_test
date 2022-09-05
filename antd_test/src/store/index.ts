import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, Context } from "next-redux-wrapper";
import CounterSlice from "src/features/counter/counterSlice";

const devMode = process.env.NODE_ENV === "development";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
  devTools: devMode,
});

const setupStore = (context: Context) => store;
const makeStore = (context: Context) => setupStore(context);

export const wrapper = createWrapper(makeStore, { debug: devMode });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
