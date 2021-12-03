import { useState } from "react/cjs/react.development";

function AddTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
  };

  return (
    <div className="new-task relative">
      <div className="check">
        <img
          className="check-icon"
          src="./images/icon-check.svg"
          alt="check icon"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          id="new--task"
          type="text"
          name="new-task"
          placeholder="Create a new todo.."
          value={value}
          autoComplete="off"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default AddTask;
