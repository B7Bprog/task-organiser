import { FC, FormEvent, useState } from "react";

const Form: FC<{ setTasks: (value: []) => void }> = ({ setTasks }: any) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTasks((tasks: []) => {
      return [input, ...tasks];
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Add task:
        <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      </label>
      <button type="submit">Add task</button>
    </form>
  );
};

export default Form;
