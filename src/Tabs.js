import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { Reorder, AnimatePresence } from "framer-motion";

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
  tasks,
  completeTask,
  removeTask,
  filter,
  orderedTasks,
  reorder,
  clearCompleted,
  itemsLeft,
  types,
  active,
}) {
  return (
    <>
      <Reorder.Group
        values={orderedTasks}
        axis="y"
        onReorder={(order) => reorder(order)}
      >
        <AnimatePresence>
          {orderedTasks.length ? (
            orderedTasks.map((task, index) => {
              return (
                <Reorder.Item
                  key={task.id}
                  value={task}
                  dragListener={true}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Task
                    task={task}
                    index={index}
                    key={task.id}
                    completeTask={completeTask}
                    removeTask={removeTask}
                  />
                </Reorder.Item>
              );
            })
          ) : (
            <div className="item">
              <div className="right flex">
                <div className="todo-item">No tasks !! Please add some</div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </Reorder.Group>
      <div className="mob-bottom">
        <div className="mob-corners">{itemsLeft} items left</div>
        <div
          className="mob-corners"
          onClick={() =>
            clearCompleted([tasks.filter((task) => task.status !== "pending")])
          }
        >
          Clear Completed
        </div>
      </div>

      <ButtonGroup className="footer">
        <div className="corner">{itemsLeft} items left</div>
        <div className="desktop-bottom">
          {types.map((type) => (
            <Tab
              key={type}
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
