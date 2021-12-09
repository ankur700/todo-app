import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { usePositionReorder } from "./UsePositionReorder";
const Tab = styled.div`
  cursor: pointer;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    color:  hsl(220, 98%, 61%) !important;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;

function TabGroup({
  filter,
  completeTask,
  removeTask,
  active,
  types,
  itemsLeft,
  clearCompleted,
  tasks,
}) {
  const [order, updatePosition, updateOrder] = usePositionReorder(tasks);

  return (
    <>
      <div className="task-list">
        {order.map((task, index, height) => {
          return (
            <Task
              task={task}
              index={index}
              key={task.id}
              height={height}
              completeTask={completeTask}
              removeTask={removeTask}
              updatePosition={updatePosition}
              updateOrder={updateOrder}
            />
          );
        })}
        <div className="mob-bottom">
          <div className="mob-corners">{itemsLeft} items left</div>
          <div
            className="mob-corners"
            onClick={() =>
              clearCompleted([
                tasks.filter((task) => task.status !== "pending"),
              ])
            }
          >
            Clear Completed
          </div>
        </div>
      </div>
      <ButtonGroup className="footer">
        <div className="corner">{itemsLeft} items left</div>
        <div className="desktop-bottom">
          {types.map((type, i) => (
            <Tab
              key={i}
              active={active === type}
              onClick={() => filter(type)}
              className="filter"
            >
              {type}
            </Tab>
          ))}
        </div>
        <div
          className="corner"
          onClick={() =>
            clearCompleted([tasks.filter((task) => task.status !== "pending")])
          }
        >
          Clear Completed
        </div>
      </ButtonGroup>
    </>
  );
}

export default TabGroup;
