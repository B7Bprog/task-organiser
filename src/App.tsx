import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [tasks, setTasks] = useState(["hello"]);

  return (
    <div>
      <Header />
      <Form setTasks={setTasks} />
      <ul>
        {tasks.map((task) => {
          return <li>{task}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
