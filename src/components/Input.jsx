import { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTaskList([...taskList, input]);
      setInput("");
    }
  };

  return (
    <form className="flex flex-col sm:flex-row items-center gap-3 bg-white shadow-md rounded-lg p-4 max-w-lg w-full mx-auto">
      <input
        className="border border-gray-300 rounded-lg py-2 px-4 text-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
};

export default Input;
