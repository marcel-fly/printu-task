import { Project } from "./Project";

export interface ProjectState {
  project: Project | null;
  loading: boolean;
  error: string | null;
}
