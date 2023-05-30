export interface Item {
  id: string;
  type: "rectangle" | "ellipse";
  color: string;
  rotation: number;
  x: number;
  y: number;
  width: number;
  height: number;
}
