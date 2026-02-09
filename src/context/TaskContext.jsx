import { createContext, useState } from "react";   //create  global data storage channel
  
export const TaskContext = createContext();  //global storage
//creating communication channel

export const TaskProvider = ({ children }) => {
//stores global data

  const [tasks, setTasks] = useState([]); //default value empty
//global state,store task list,update
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>   
      {children}
    </TaskContext.Provider>
  );
};
