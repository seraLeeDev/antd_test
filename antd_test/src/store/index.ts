import { configureStore, getDefaultMiddleware, Action, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper, Context } from "next-redux-wrapper";
import slice from "./slices";

const devMode = process.env.NODE_ENV === "development";

const store = configureStore({
  reducer: slice,
  devTools: devMode,
  middleware: [...getDefaultMiddleware()],
});

const setupStore = (context: Context) => store;

const makeStore = (context: Context) => setupStore(context);

export const wrapper = createWrapper(makeStore, {
  debug: devMode,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
