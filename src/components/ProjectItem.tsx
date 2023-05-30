import { useGetBoungingBoxParams } from "../functions/useGetBoundingBoxParams";
import { Item } from "../models/Item";

export const ProjectItem = (item: Item) => {
  const { x, y, height, width, rotation, color, type } = item;
  const { boundingBoxWidth, boundingBoxHeight } = useGetBoungingBoxParams(
    width,
    height,
    rotation
  );
  return (
    <>
      <g transform={`rotate(${rotation} ${x}, ${y})`}>
        {type === "rectangle" && (
          <rect
            x={x - 0.5 * width}
            y={y - 0.5 * height}
            width={width}
            height={height}
            fill={color}
          />
        )}
        {type === "ellipse" && (
          <ellipse cx={x} cy={y} rx={width / 2} ry={height / 2} fill={color} />
        )}

        <circle cx={x} cy={y} r={2} fill="white" />
      </g>
      <rect
        x={x - 0.5 * boundingBoxWidth}
        y={y - 0.5 * boundingBoxHeight}
        width={boundingBoxWidth}
        height={boundingBoxHeight}
        stroke="red"
        fill="none"
      />
      <text
        x={x + 20}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
      >
        {rotation}°
      </text>
    </>
  );
};
