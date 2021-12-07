import React from "react";
import styled from "styled-components";
import Task from "./Task";

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
  filteredTasks,
  clearCompleted,
  tasks,
}) {
  return (
    <>
      <div className="task-list">
        {filteredTasks.map((task, index) => {
          return (
            <Task
              task={task}
              index={index}
              key={index}
              completeTask={completeTask}
              removeTask={removeTask}
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
