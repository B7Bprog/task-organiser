import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [tasks, setTasks] = useState([
    { title: "firstTask", description: "task description here" },
  ]);

  return (
    <div>
      <Header />
      <Form setTasks={setTasks} />
      <ul>
        {tasks.map((task) => {
          return (
            <li>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
