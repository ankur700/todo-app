import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import { todos } from "./data";

function App() {
  const [theme, setTheme] = useState("light");

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
                />
              </div>
              <div className="task-list">
                <div className="item">
                  <div className="right flex">
                    <div className="check">
                      <img
                        className="check-icon"
                        src="./images/icon-check.svg"
                        alt="check icon"
                      />
                    </div>
                    <div className="todo-item">
                      Complete JavaScript tutorial Online
                    </div>
                  </div>
                  <img
                    className="cross"
                    src="./images/icon-cross.svg"
                    alt="icon cross"
                  />
                </div>
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
