function Task({ task, index, completeTask, removeTask, theme }) {
  return (
    <>
      <div key={index} className="item">
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
              textDecoration: task.status === "completed" ? "line-through" : "",
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
    </>
  );
}

export default Task;
