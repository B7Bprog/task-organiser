import { useEffect, useState } from "react";
// import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Contents from "./components/Contents";
import TaskList from "./components/TaskList";
import styles from "./App.module.css";
const { ipcRenderer } = require("electron");

function App() {
  const [tasks, setTasks] = useState([
    { title: "firstTask", description: "task description here" },
  ]);

  useEffect(() => {
    ipcRenderer.send("saveTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Header />
      <div id={styles.page_section}>
        <div id={styles.content_wrapper}>
          <Contents />
        </div>
        <div>
          <Form setTasks={setTasks} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
