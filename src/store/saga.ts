import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchProject } from "./actions";
import {
  FETCH_PROJECT_FAILURE,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
  INIT_DATA_FAILURE,
  INIT_DATA_REQUEST,
  INIT_DATA_SUCCESS,
} from "./actionTypes";

function* fetchInitDataSaga(): any {
  try {
    const response = yield call(
      axios.get,
      "http://recruitment01.vercel.app/api/init"
    );

    yield put({ type: INIT_DATA_SUCCESS, payload: response.data });
    yield call(fetchProjectSaga, {
      type: FETCH_PROJECT_REQUEST,
      projectId: response.data.id,
    });
  } catch (e: any) {
    yield put({ type: INIT_DATA_FAILURE, message: e.message });
  }
}

function* fetchProjectSaga(action: ReturnType<typeof fetchProject>): any {
  try {
    const response = yield call(
      axios.get,
      `http://recruitment01.vercel.app/api/project/${action.projectId}`
    );
    yield put({ type: FETCH_PROJECT_SUCCESS, payload: response.data });
  } catch (e: any) {
    yield put({ type: FETCH_PROJECT_FAILURE, payload: e.message });
  }
}

// Nasłuchiwanie na akcje
export function* projectSaga() {
  yield takeLatest(FETCH_PROJECT_REQUEST, fetchProjectSaga);
  yield takeLatest(INIT_DATA_REQUEST, fetchInitDataSaga);
}

export default projectSaga;
