import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import TaskList from "./TaskList";
import { todos } from "./data";

function App() {
  const [theme, setTheme] = useState("light");
  const [tasks, setTasks] = useState(todos);
  // const [newTask, setNewTask] = useState("");

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  const addTask = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      let todo = {
        task: e.target.value,
        status: "pending",
      };
      let newTasks = tasks.push(todo);
      setTasks(newTasks);
      e.target.value = "";
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="main">
          <div className="container grid">
            <div className="hero">
              <picture>
                <source
                  id="hero-image-small"
                  media="(min-width: 375px )"
                  srcSet="./images/bg-mobile-light.jpg"
                />
                <source
                  id="hero-image-big"
                  media="(min-width: 700px )"
                  srcSet="./images/bg-desktop-light.jpg"
                />
                <img
                  id="hero-image"
                  src="./images/bg-desktop-light.jpg"
                  alt="hero"
                />
              </picture>
            </div>
            <div className="tasks flex flex-column">
              <div className="head flex">
                <h1 className="title">Todo</h1>
                <div className="icon">
                  <img
                    className="theme-icon"
                    src="./images/icon-moon.svg"
                    alt="moon icon"
                    onClick={toggleTheme}
                  />
                  <img
                    className="theme-icon hidden"
                    src="./images/icon-sun.svg"
                    alt="sun icon"
                    onClick={toggleTheme}
                  />
                </div>
              </div>
              <div className="new-task relative">
                <div className="check">
                  <img
                    className="check-icon"
                    src="./images/icon-check.svg"
                    alt="check icon"
                  />
                </div>
                <input
                  id="new--task"
                  type="text"
                  placeholder="Create a new todo.."
                  defaultValue=""
                  onKeyDown={(e) => addTask(e)}
                />
              </div>

              <TaskList todos={tasks} />

              <div className="footer flex">
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
              </div>
            </div>
          </div>
          <div className="attribution">
            Challenge by
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://dev.page/ankursinghchauhan"
              target="_blank"
              rel="noreferrer"
            >
              Ankur Singh Chauhan
            </a>
            .
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
