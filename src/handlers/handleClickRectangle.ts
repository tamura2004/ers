import React from "react";

const ClickedPosition = {
  TopLeft: "TopLeft",
  TopRight: "TopRight",
  BottomLeft: "BottomLeft",
  BottomRight: "BottomRight",
} as const;
type ClickedPosition = (typeof ClickedPosition)[keyof typeof ClickedPosition];

type ClickedCallback = Record<ClickedPosition, () => void>;

const getPosition = (
  event: React.MouseEvent<HTMLDivElement>,
): ClickedPosition => {
  const { top, height, left, width } =
    event.currentTarget.getBoundingClientRect();
  const clickY = event.clientY - top;
  const clickX = event.clientX - left;

  if (clickY < height / 2 && clickX < width / 2) {
    return ClickedPosition.TopLeft;
  } else if (clickY < height / 2 && clickX > width / 2) {
    return ClickedPosition.TopRight;
  } else if (clickY > height / 2 && clickX < width / 2) {
    return ClickedPosition.BottomLeft;
  } else {
    return ClickedPosition.BottomRight;
  }
};

export const handleClickRectangle =
  (clickedCallback: ClickedCallback) =>
  (event: React.MouseEvent<HTMLDivElement>) => {
    const position = getPosition(event);
    clickedCallback[position]();
  };
