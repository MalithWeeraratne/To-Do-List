import { useState } from "react";

const Input = ({taskList, setTaskList}) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  }

  return (
    <>
      <form className="flex flex-row items-center gap-3">
        <input
        className="border rounded-lg py-1 px-2.5 text-lg"
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button 
        className="bg-blue-500 text-white rounded-lg py-1 px-2.5"
        onClick={handleSubmit}>Add</button>
      </form>
    </>
  );
};

export default Input;
