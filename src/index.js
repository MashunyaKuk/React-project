import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./styles/index.scss";

//Simple JS

/* const taskList = [
  { taskName: "Task 1", isDone: false },
  { taskName: "Task 2", isDone: false },
];

const rootDOMElem = document.getElementById("root");

const cardList = taskList.map((task) => {
  return new Card(task.taskName, task.isDone, rootDOMElem);
}); */

//React

/* const taskList = [
  { taskName: "Task 1", isDone: false },
  { taskName: "Task 2", isDone: false },
]; */

ReactDOM.render(<App />, document.getElementById("root"));

//Нужно отбилдить после изменений в сонфиге или пэкедж джсон, иначе не получается нормально пользоваться девсервером
