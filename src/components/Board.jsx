const Board = ({ task, index, taskList, setTaskList }) => {
    const handleDelete = () => {
      setTaskList(taskList.filter((_, i) => i !== index));
    };
  
    return (
      <div className="flex flex-col items-center justify-between bg-white shadow-lg rounded-lg p-4 border border-gray-200 text-center">
        <p className="text-lg font-medium">{task}</p>
        <button
          className="bg-red-500 text-white rounded-lg py-1 px-3 mt-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default Board;
  