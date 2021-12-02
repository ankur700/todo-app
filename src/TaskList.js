import { useState } from "react";

function TaskList({ todos }) {
  // const [status, setStatus] = useState("pending");
  const [tasks, setTasks] = useState(todos);

  const deleteTask = (i) => {
    let newTasks = tasks.splice(i, 1);
    setTasks(tasks.filter((id) => id !== newTasks));
  };

  return (
    <div className="task-list">
      {tasks.length &&
        tasks.map((task, i) => {
          return (
            <>
              <div key={i} className="item">
                <div className="right flex">
                  <div className="check" data-checked={task.status}>
                    <img
                      className="check-icon"
                      src="./images/icon-check.svg"
                      alt="check icon"
                    />
                  </div>
                  <div className="todo-item">{task.task}</div>
                </div>
                <img
                  className="cross"
                  src="./images/icon-cross.svg"
                  alt="icon cross"
                  onClick={() => deleteTask(i)}
                />
              </div>
            </>
          );
        })}

      <div className="mob-bottom">
        <p>3 items left</p>
        <div className="desktop-footer">
          <p className="active">All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <p>Clear Completed</p>
      </div>
    </div>
  );
}

export default TaskList;
