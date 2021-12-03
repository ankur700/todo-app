import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import AddTask from "./AddTask";
import Task from "./Task";
// import { todos } from "./data";

function App() {
  const [theme, setTheme] = useState("light");
  const [tasks, setTasks] = useState([
    {
      task: "Complete online JavaScript course.",
      status: "completed",
    },
    {
      task: "Jog around the park 3x.",
      status: "pending",
    },
    {
      task: "10 minutes meditation.",
      status: "pending",
    },
    {
      task: "Read for 1 hour.",
      status: "pending",
    },
    {
      task: "Pick up groceries.",
      status: "pending",
    },
    {
      task: "Complete Todo App on Frontend Mentor.",
      status: "pending",
    },
  ]);

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      console.log(tasks);
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  const addTask = (task) => {
    const newTasks = [...tasks, { task, status: "pending" }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].status = "completed";
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
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

              <AddTask addTask={addTask} />

              <div className="task-list">
                {tasks.map((task, index) => {
                  return (
                    <>
                      <Task
                        task={task}
                        index={index}
                        key={index}
                        completeTask={completeTask}
                        removeTask={removeTask}
                      />
                    </>
                  );
                })}
              </div>

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
