import { combineReducers } from "redux";
import repositoriesReducer from "./respositoriesReducer";

const rootReducers = combineReducers({
  repositories: repositoriesReducer,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
