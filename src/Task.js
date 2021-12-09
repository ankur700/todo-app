import { useState } from "react";
import { useMeasurePosition } from "./UseMeasurePosition";
import { motion } from "framer-motion";

function Task({
  task,
  index,
  completeTask,
  removeTask,
  updatePosition,
  updateOrder,
  height,
}) {
  const [isDragging, setDragging] = useState(false);

  const ref = useMeasurePosition((pos) => updatePosition(index, pos));
  return (
    <>
      <motion.div
        style={{ height }}
        ref={ref}
        layout
        initial={false}
        whileHover={{
          scale: 1.03,
          boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
        }}
        whileTap={{
          scale: 1.12,
          boxShadow: "0px 5px 5px rgba(0,0,0,0.1)",
        }}
        drag="y"
        dragElastic={1}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        onViewportBoxUpdate={(_viewportBox, delta) => {
          isDragging && updateOrder(index, delta.y.translate);
        }}
      >
        <div
          className="item"
          style={{
            height,
            // If we're dragging, we want to set the zIndex of that item to be on top of the other items.
            zIndex: isDragging ? 3 : 1,
          }}
        >
          <div className="right flex" data-checked={task.status}>
            <div className="check" onClick={() => completeTask(task)}>
              <img
                className="check-icon"
                src="./images/icon-check.svg"
                alt="check icon"
              />
            </div>
            <div
              className="todo-item"
              style={{
                textDecoration:
                  task.status === "completed" ? "line-through" : "",
              }}
            >
              {task.task}
            </div>
          </div>
          <img
            className="cross"
            src="./images/icon-cross.svg"
            alt="icon cross"
            onClick={() => removeTask(index)}
          />
        </div>
      </motion.div>
    </>
  );
}

export default Task;
