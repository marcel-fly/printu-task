export const useGetBoungingBoxParams = (
  width: number,
  height: number,
  rotationDegrees: number
) => {
  const rotationRadians = (rotationDegrees * Math.PI) / 180;

  const corners = [
    { x: 0, y: 0 },
    { x: width, y: 0 },
    { x: width, y: height },
    { x: 0, y: height },
  ];

  const rotatedCorners = corners.map(({ x, y }) => {
    const rotatedX =
      x * Math.cos(rotationRadians) - y * Math.sin(rotationRadians);
    const rotatedY =
      x * Math.sin(rotationRadians) + y * Math.cos(rotationRadians);
    return { x: rotatedX, y: rotatedY };
  });

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  rotatedCorners.forEach(({ x, y }) => {
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  });

  const boundingBoxWidth = maxX - minX;
  const boundingBoxHeight = maxY - minY;

  return {
    boundingBoxWidth: boundingBoxWidth,
    boundingBoxHeight: boundingBoxHeight,
  };
};
