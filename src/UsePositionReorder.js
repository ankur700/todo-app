import { useState, useRef } from "react";
import { clamp, distance } from "popmotion";
import { arrayMoveMutable as move } from "array-move";

// const move = arrayMoveImmutable;

export function usePositionReorder(initialState) {
  const [order, setOrder] = useState(initialState);

  // We need to collect an array of height and position data for all of this component's
  // `Item` children, so we can later us that in calculations to decide when a dragging
  // `Item` should swap places with its siblings.
  const positions = useRef([]).current;
  const updatePosition = (index, offset) => (positions[index] = offset);

  // Find the ideal index for a dragging item based on its position in the array, and its
  // current drag offset. If it's different to its current index, we swap this item with that
  // sibling.

  const updateOrder = (index, dragOffset) => {
    const targetIndex = findIndex(index, dragOffset, positions);
    if (targetIndex !== index) setOrder(move(order, index, targetIndex));
  };

  return [order, updatePosition, updateOrder];
}

const buffer = 30;

export const findIndex = (index, yOffset, positions) => {
  let target = index;
  const { top, height } = positions[index];
  const bottom = top + height;

  // If moving down
  if (yOffset > 0) {
    const nextItem = positions[index + 1];
    if (nextItem === undefined) return index;

    const swapOffset =
      distance(bottom, nextItem.top + nextItem.height / 2) + buffer;
    if (yOffset > swapOffset) target = index + 1;

    // If moving up
  } else if (yOffset < 0) {
    const prevItem = positions[index - 1];
    if (prevItem === undefined) return index;

    const prevBottom = prevItem.top + prevItem.height;
    const swapOffset = distance(top, prevBottom - prevItem.height / 2) + buffer;
    if (yOffset < -swapOffset) target = index - 1;
  }

  return clamp(0, positions.length, target);
};
