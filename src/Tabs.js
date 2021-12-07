import React, { useState } from "react";
import styled from "styled-components";
import Task from "./Task";
import AddTask from "./AddTask";

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

function TabGroup({ tasks }) {
  const [active, setActive] = useState(types[0]);
  const [filteredTasks, setFilteredTasks] = useState([...tasks]);
  const [itemsLeft, setItemLeft] = useState(
    filteredTasks.filter((task) => task.status === "pending").length
  );
  const filter = (type) => {
    setActive(type);
    const newTasks = [...tasks];
    if (type === "All") {
      setFilteredTasks(newTasks);
    } else if (type === "Active") {
      const activeTasks = newTasks.filter((task) => task.status === "pending");
      setFilteredTasks(activeTasks);
    } else if (type === "Completed") {
      const completedTasks = newTasks.filter(
        (task) => task.status === "completed"
      );
      setFilteredTasks(completedTasks);
    }
  };

  const completeTask = (task) => {
    tasks = [...filteredTasks];
    let status = task.status;
    if (status === "pending") {
      task.status = "completed";
    } else if (status === "completed") {
      task.status = "pending";
    }
    setFilteredTasks(tasks);
  };

  const removeTask = (index) => {
    tasks = [...filteredTasks];
    tasks.splice(index, 1);
    setFilteredTasks(tasks);
  };

  const addTask = (task) => {
    const newTasks = [...filteredTasks, { task: task, status: "pending" }];
    setFilteredTasks(newTasks);
    setItemLeft(newTasks.filter((task) => task.status === "pending").length);
  };

  return (
    <>
      <AddTask addTask={addTask} />

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
