import { all, fork } from "redux-saga/effects";

import projectSaga from "./saga";

export function* rootSaga() {
  yield all([fork(projectSaga)]);
}
