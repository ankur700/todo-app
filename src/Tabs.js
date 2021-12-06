import React, { useState } from "react";
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
const types = ["All", "Active", "Completed"];

function TabGroup({ completeTask, removeTask, tasks, itemsLeft, theme }) {
  const [active, setActive] = useState(types[0]);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const filter = (type) => {
    setActive(type);
    if (type === "All") {
      setFilteredTasks(tasks);
    } else if (type === "Active") {
      const activeTasks = tasks.filter((task) => task.status !== "completed");
      setFilteredTasks(activeTasks);
    } else if (type === "Completed") {
      const completedTasks = tasks.filter(
        (task) => task.status === "completed"
      );
      setFilteredTasks(completedTasks);
    }
  };

  return (
    <>
      <div className="task-list">
        {filteredTasks.map((task, index) => {
          return (
            <>
              <Task
                task={task}
                index={index}
                key={index}
                completeTask={completeTask}
                removeTask={removeTask}
                theme={theme}
              />
            </>
          );
        })}

        <div className="mob-bottom">
          <div className="mob-corners">{itemsLeft} items left</div>
          <div className="mob-corners">Clear Completed</div>
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
        <div className="corner">Clear Completed</div>
      </ButtonGroup>
    </>
  );
}

export default TabGroup;
