import { useState, useContext, useRef } from "react";  //useref-directly acess dom element
import { TaskContext } from "../context/TaskContext";

//adding new task
const TaskForm = () => {

  const { tasks, setTasks } = useContext(TaskContext);  //reads global task storage
    //add current task list,update tasks list
  
  const [taskInput, setTaskInput] = useState("");  //inputs start empty
  //state variables,stores typed txt by user,updates task input value
  
  const inputRef = useRef(); //refrence to html elemnt
  //input field refrnce,to focus on input validation
  
  //function runs when form submitted
  const handleSubmit = (e) => {
    e.preventDefault();   //stop reload

    if (taskInput.trim() === "") {    //remove extra spaces
      alert("Task cannot be empty");
      inputRef.current.focus();     //input box,focus-cursor moves to input
      return;
    }


    //object
    const newTask = {       //creating new task
      id: Date.now(),    //genrates unique timestamp
      title: taskInput
    };

    setTasks([...tasks, newTask]);  //spread oprtr-react state must update immutably,copy existing tasks,adding new task at end
    setTaskInput("");     //reset input box after submission
  };

  //form creation
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}        //conncting input elemnt to useRef
        value={taskInput}    //controlled compoent,react controls user input
        onChange={(e) => setTaskInput(e.target.value)} //react update states
        placeholder="Enter Task"
      />

      <button>Add Task</button>  
    </form>
  );
};

export default TaskForm;
