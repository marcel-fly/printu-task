import { ProjectState } from "../models/ProjectState";
import {
  FETCH_PROJECT_FAILURE,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
  INIT_DATA_FAILURE,
  INIT_DATA_REQUEST,
  INIT_DATA_SUCCESS,
} from "./actionTypes";

const initialState: ProjectState = {
  project: null,
  loading: false,
  error: null,
};

export const projectReducer = (
  state = initialState,
  action: any
): ProjectState => {
  switch (action.type) {
    case FETCH_PROJECT_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PROJECT_SUCCESS:
      return { ...state, loading: false, project: action.payload.project };
    case FETCH_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        project: null,
        error: action.payload,
      };
    case INIT_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case INIT_DATA_SUCCESS:
      return { ...state, loading: false, project: action.payload.project };
    case INIT_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
