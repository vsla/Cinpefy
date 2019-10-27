import React, { useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";

import { Container, Label } from "./styles";

import BoardContext from "../Board/context";

export default function Card({ data, index, listIndex }) {
  const ref = useRef();

  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  // Function called when an a dragged card is above a targetCard
  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      // Item is received from useDrag item you are dragging
      // Index is from the item where you are dragging into
      const draggedIndex = item.index;
      const targetIndex = index;

      // If dragging in the same card
      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      // Get full size info of the target card
      const targetSize = ref.current.getBoundingClientRect();
      // Center of the target card
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      // Get full info where the dragging card from the screen
      const draggedOffset = monitor.getClientOffset();
      // Calc the distance between
      // The dragged item from the top - the distance of the card receiver from top
      const draggedTop = draggedOffset.y - targetSize.top;

      // DraggedCard is above the target card and
      // Didnt pass the half of the target card
      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }
      // DraggedCard is under the target card and
      // Didnt pass the half of the target card
      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      // fromlist -- targetList / Which item is moving -- item where to move
      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
      
      // Bug that card dont know that has been moved
      item.index = targetIndex;
      item.listIndex = targetListIndex;

    }
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map(label => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Container>
  );
}
