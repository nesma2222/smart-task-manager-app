import React from "react";


//component creation
const TaskItem = React.memo(({ task, deleteTask }) => {
// Higher Order component(HOC)prvnts unnecessary re-rendering-if props chnge only re-renders,props
  console.log("Rendering Task:", task.title);
//is compoent re-rndring?

  return (
    <li>
      {task.title}      
      <button onClick={() => deleteTask(task.id)}>Delete</button>   
    </li>
  );
});

export default TaskItem;
