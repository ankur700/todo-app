import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



body {
  margin: 0;
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

img {
  display: block;
  width: 100%;
  height: 100%;
}


.flex {
  display: flex;
}

.grid {
  display: grid;
}

.justify-center {
  justify-content: center;
}
.items-center {
  align-items: center;
}

.flex-column {
  flex-direction: column;
}
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.hidden {
  display: none !important;
}

.text-center {
  text-align: center;
}

body {
  background-color: ${({ theme }) => theme.mainbg};
}

.main {
  height: 100vh;
  overflow-y: scroll;
}

.container {
  grid-template-rows: minmax(200px, 300px) 1fr 100px;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.mainbg};
}

.hero {
  height: 200px;
  grid-row: 1;
  grid-column: 1;
}


.tasks {
  grid-row: 1/3;
  grid-column: 1;
  max-width: calc(100vw - 2.5rem);
  width: 100%;
  justify-self: center;
  gap: 1rem;
  margin-top: 2rem;
}

.head {
  justify-content: space-between;
  align-items: center;
}

.title {
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 1.5rem;
  color: hsl(0, 0%, 98%);
  font-weight: 700;
}

.icon {
  height: 1.125rem;
  width: 1.125rem;
  cursor: pointer;
}

.new-task {
  border-radius: 10px;
}
.new-task,
.item {
  display: flex;
  align-items: center;
  height: 50px;
  background: ${({ theme }) => theme.cardbg};
  gap: 0.5rem;
  font-size: 0.75rem;
  padding: 0 1rem;
}


.check {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding: 0.32rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

#dark .check {
  border: 1px solid ${({ theme }) => theme.radioCheckBg};
}

#light .check {
  border: 1px solid ${({ theme }) => theme.lighttext};
}

.check img {
  object-fit: cover;
  cursor: pointer;
}

.right[data-checked="completed"] .check{
  background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}

.right[data-checked="pending"] .check{
  background: transparent;
}

.right[data-checked="completed"] .check > .check-icon {
  visibility: visible;
}



.check-icon {
  visibility: hidden;
}

.item:nth-of-type(1) {
  border-radius: 5px 5px 0 0;
}

.item {
  border-bottom: 1.5px solid ${({ theme }) => theme.mainbg};
  justify-content: space-between;
}

.item .right {
  gap: 1rem;
  align-items: center;
}


.todo-item {
  font-weight: var(--fw-700);
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;
}


#light .right[data-checked="completed"] .todo-item {
  color: hsl(233, 11%, 84%);
}

#light .right[data-checked="pending"] .todo-item {
  color: hsl(235, 19%, 35%);
}

#dark .right[data-checked="completed"] .todo-item {
  color: hsl(235, 19%, 35%);
}

#dark .right[data-checked="pending"] .todo-item {
  color: hsl(233, 11%, 84%);
}

.item .cross {
  visibility: hidden;
  height: 10px;
  width: 10px;
  cursor: pointer;
}

.item:hover .cross {
  visibility: visible;
}

.mob-bottom {
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: ${({ theme }) => theme.cardbg};
  font-size: 0.75rem;
  padding: 0 1rem;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: ${({ theme }) => theme.cardbg};
  font-size: 0.75rem;
  padding: 0 1rem;
  gap: 2rem;
  border-radius: 5px;
}

.footer{
  font-size: 12px;
  font-weight: normal;
  text-transform: capitalize;
}

.mob-bottom, .footer {
  color: ${({ theme }) => theme.darktext};
}

.mob-bottom .mob-corners{
  cursor: pointer;
}

#light .footer > .corner:hover , #light .desktop-bottom > .filter:hover, #light .mob-bottom > .mob-corners:hover {
  color: ${({ theme }) => theme.darkertext};
}

#dark .footer > .corner:hover , #dark .desktop-bottom > .filter:hover, #dark .mob-bottom > .mob-corners:hover {
  color: ${({ theme }) => theme.lighttext};
}

input[type="text"] {
  height: 50px;
  border: 0;
  width: 100%;
  outline: none;
  padding: 0.5rem;
  appearance: none;
  background: transparent;
}
input[type="text"]:focus{
  appearance: none;
  background: transparent;
}

  .corner {
    display: none;
  }


.desktop-bottom {
  display: flex;
  gap: 1rem;
}

@media only screen and (min-width: 600px) {
  .hero {
    height: 280px;
  }

  .tasks {
    max-width: 25rem;
    margin-top: 5rem;
  }


  #light .check {
    border: 1px solid ${({ theme }) => theme.lighttext};
  }

  #light .check:hover {
  border: 1px solid ${({ theme }) => theme.darkertext};
  }

  #dark .check:hover {
    border: 1px solid linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  }

  .mob-bottom {
    display: none;
  }

  .footer {
    justify-content: space-between;
  }

  .corner {
    display: block;
  }

  .desktop-bottom {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  
`;
