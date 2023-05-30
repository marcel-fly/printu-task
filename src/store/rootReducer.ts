import { combineReducers } from "redux";

import { projectReducer } from "./reducers";

const rootReducer = combineReducers({
  projectState: projectReducer,
});

export type ProjectState = ReturnType<typeof rootReducer>;

export default rootReducer;
