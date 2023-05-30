import {
  FETCH_PROJECT_FAILURE,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
  INIT_DATA_FAILURE,
  INIT_DATA_REQUEST,
  INIT_DATA_SUCCESS,
} from "./actionTypes";

export const fetchProject = (projectId: string) => ({
  type: FETCH_PROJECT_REQUEST,
  projectId: projectId,
});

export const fetchProjectSuccess = (payload: string) => ({
  type: FETCH_PROJECT_SUCCESS,
  payload: payload,
});

export const fetchProjectFailure = (payload: string) => ({
  type: FETCH_PROJECT_FAILURE,
  payload: payload,
});
export const init = () => ({
  type: INIT_DATA_REQUEST,
});

export const initSucces = (payload: string) => ({
  type: INIT_DATA_SUCCESS,
  payload: payload,
});

export const initFailure = (payload: string) => ({
  type: INIT_DATA_FAILURE,
  payload: payload,
});
