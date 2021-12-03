
function Task({ task, index, completeTask, removeTask }) {
  return (
    <>
      <div className="item">
        <div className="right flex">
          <div
            className="check"
            style={{
              background:
                task.status === "completed"
                  ? "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
                  : "",
            }}
          >
            <img
              className="check-icon"
              src="./images/icon-check.svg"
              alt="check icon"
              onClick={() => completeTask(index)}
              style={{
                visibility: task.status === "completed" ? "visible" : "hidden",
              }}
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
