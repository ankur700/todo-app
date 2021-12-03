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
  border: 1px solid ${({ theme }) => theme.lighttext};
  padding: 0.32rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.check img {
  object-fit: cover;
  cursor: pointer;
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
  color: ${({ theme }) => theme.darkertext};
  font-weight: var(--fw-700);
}

.item .cross {
  height: 10px;
  width: 10px;
  cursor: pointer;
}

.desktop-footer {
  display: none;
}

.mob-bottom {
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: ${({ theme }) => theme.cardbg};
  color: ${({ theme }) => theme.darktext};
  font-size: 0.75rem;
  padding: 0 1rem;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: ${({ theme }) => theme.cardbg};
  color: ${({ theme }) => theme.darktext};
  font-size: 0.75rem;
  padding: 0 1rem;
  gap: 2rem;
  border-radius: 5px;
}

footer p {
  font-size: 18px;
  font-weight: normal;
  text-transform: capitalize;
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

@media only screen and (min-width: 600px) {
  .hero {
    height: 280px;
  }

  .tasks {
    max-width: 25rem;
    margin-top: 5rem;
  }

  .desktop-footer {
    display: flex;
    gap: 1rem;
  }

  .footer {
    display: none;
  }
}
`;
