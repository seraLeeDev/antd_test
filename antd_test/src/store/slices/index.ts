import { combineReducers, AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import counter, { ICounter } from "./counter";

export interface IState {
  counter: ICounter;
}
const rootReducer = (state: IState | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        counter,
      });

      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
