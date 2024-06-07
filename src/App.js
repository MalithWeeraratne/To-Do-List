import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList);


  return (
    <>
      <h1>To Do Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList}/>
      <div>
        {taskList.map((task) => (
         <li>{task}</li>
        ))}
      </div>
    </>
  );
}

export default App;

