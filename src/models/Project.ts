import { Item } from "./Item";

export interface Project {
  id: string;
  name: string;
  width: number;
  height: number;
  items: Item[];
}
