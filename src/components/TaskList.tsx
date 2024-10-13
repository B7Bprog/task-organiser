import { FC } from "react";

const TaskList: FC<{ tasks: { title: string; description: string }[] }> = ({
  tasks,
}) => {
  return (
    <ul>
      {tasks.map((task: { title: string; description: string }) => {
        return (
          <li>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
