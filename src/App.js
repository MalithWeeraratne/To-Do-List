import { useState } from "react";
import Input from "./components/Input";
import Board from "./components/Board";
import "./index.css";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center py-10">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">To Do Board</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {taskList.map((task, index) => (
            <Board
              key={index}
              index={index}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
