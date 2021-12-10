import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import TabGroup from "./Tabs";
import AddTask from "./AddTask";

const DATA = [
  {
    id: "1",
    task: "Complete online JavaScript course.",
    status: "completed",
  },
  {
    id: "2",
    task: "Jog around the park 3x.",
    status: "pending",
  },
  {
    id: "3",
    task: "10 minutes meditation.",
    status: "pending",
  },
  {
    id: "4",
    task: "Read for 1 hour.",
    status: "pending",
  },
  {
    id: "5",
    task: "Pick up groceries.",
    status: "pending",
  },
  {
    id: "6",
    task: "Complete Todo App on Frontend Mentor.",
    status: "pending",
  },
];

function App() {
  const [theme, setTheme] = useState("light");

  const [tasks, setTasks] = useState(DATA);
  const types = ["All", "Active", "Completed"];
  const [active, setActive] = useState(types[0]);

  const [orderedTasks, setOrderedTasks] = useState([...tasks]);

  const [itemsLeft, setItemLeft] = useState(
    tasks.filter((task) => task.status === "pending").length
  );

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

  const filter = (type) => {
    setActive(type);

    if (type === "All") {
      setOrderedTasks(tasks);
      setItemLeft(tasks.filter((task) => task.status === "pending").length);
    } else if (type === "Active") {
      // const Tasks = [...newTasks];
      const activeTasks = tasks.filter((task) => task.status === "pending");
      setOrderedTasks(activeTasks);
      setItemLeft(tasks.filter((task) => task.status === "pending").length);
    } else if (type === "Completed") {
      // const Tasks = [...newTasks];
      const completedTasks = tasks.filter(
        (task) => task.status === "completed"
      );
      setOrderedTasks(completedTasks);
      setItemLeft(0);
    }
  };

  const completeTask = (task) => {
    let status = task.status;
    if (status === "pending") {
      task.status = "completed";
    } else if (status === "completed") {
      task.status = "pending";
    }
    const newTasks = [...tasks];
    setTasks(newTasks);
    setOrderedTasks(tasks);
    setItemLeft(tasks.filter((task) => task.status === "pending").length);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];

    newTasks.splice(index, 1);
    setTasks(newTasks);
    setOrderedTasks(newTasks);
    setItemLeft(itemsLeft - 1);
  };

  const addTask = (task) => {
    const newTasks = [...tasks, { task: task, status: "pending" }];
    setOrderedTasks(newTasks);
    setTasks(newTasks);
    setItemLeft(itemsLeft + 1);
  };

  const clearCompleted = () => {
    let newTasks = [...tasks];
    newTasks = newTasks.filter((task) => task.status === "pending");
    // console.log(newTasks);

    setTasks(newTasks);
    setOrderedTasks(newTasks);
  };

  const reorder = (order) => {
    setOrderedTasks(order);
  };

  // useEffect(() => {
  //   setOrderedTasks(DATA);
  // }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="main" id={theme}>
          <div className="container grid">
            <div className="hero">
              <picture>
                <source
                  id="hero-image-small"
                  media="(min-width: 375px )"
                  srcSet={"./images/bg-mobile-" + theme + ".jpg"}
                />
                <source
                  id="hero-image-big"
                  media="(min-width: 700px )"
                  srcSet={"./images/bg-desktop-" + theme + ".jpg"}
                />
                <img
                  id="hero-image"
                  src={"./images/bg-mobile-" + theme + ".jpg"}
                  alt="hero"
                />
              </picture>
            </div>
            <div className="tasks flex flex-column">
              <div className="head flex">
                <h1 className="title">Todo</h1>
                <div className="icon">
                  <img
                    className={
                      theme === "light" ? "theme-icon" : "theme-icon hidden"
                    }
                    src="./images/icon-moon.svg"
                    alt="moon icon"
                    onClick={toggleTheme}
                  />
                  <img
                    className={
                      theme === "dark" ? "theme-icon" : "theme-icon hidden"
                    }
                    src="./images/icon-sun.svg"
                    alt="sun icon"
                    onClick={toggleTheme}
                  />
                </div>
              </div>
              <AddTask addTask={addTask} />
              <TabGroup
                tasks={tasks}
                completeTask={completeTask}
                removeTask={removeTask}
                clearCompleted={clearCompleted}
                orderedTasks={orderedTasks}
                reorder={reorder}
                filter={filter}
                itemsLeft={itemsLeft}
                types={types}
                active={active}
              />
            </div>
            <div className="attribution">
              <p>
                {" Challenge by "}
                <a
                  href="https://www.frontendmentor.io?ref=challenge"
                  target="_blank"
                  rel="noreferrer"
                >
                  Frontend Mentor
                </a>
                {". Coded by "}
                <a
                  href="https://dev.page/ankursinghchauhan"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ankur Singh Chauhan
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
