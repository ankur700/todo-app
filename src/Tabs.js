import React from "react";
import styled from "styled-components";
// import Task from "./Task";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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
  handleOnDragEnd,
}) {
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="filteredTasks">
          {(provided) => (
            <div
              className="task-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredTasks.map((task, index) => {
                return (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <>
                        <div
                          key={task.id}
                          className="item"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div
                            className="right flex"
                            data-checked={task.status}
                          >
                            <div
                              className="check"
                              onClick={() => completeTask(task)}
                            >
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
                                  task.status === "completed"
                                    ? "line-through"
                                    : "",
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
                        {/* <Task
                        task={task}
                        index={index}
                        key={index}
                        completeTask={completeTask}
                        removeTask={removeTask}

                      /> */}
                      </>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
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
          )}
        </Droppable>
      </DragDropContext>

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
