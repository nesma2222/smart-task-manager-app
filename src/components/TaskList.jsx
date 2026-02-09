import { useContext, useCallback, useMemo } from "react";  //use calllback used to prevent function being recreated
import { TaskContext } from "../context/TaskContext";    //importing global task storage
import TaskItem from "./TaskItem";

const TaskList = () => {

  const { tasks, setTasks } = useContext(TaskContext);

  // useCallback → prevent function recreation
  const deleteTask = useCallback((id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }, [tasks, setTasks]);

  // useMemo → optimize calculation
  const totalTasks = useMemo(() => {
    return tasks.length;     //length recalculated
  }, [tasks]);   //dependency array

  return (
    <div>
      <h3>Total Tasks: {totalTasks}</h3>

      <ul>
        {tasks.map(task => (   //taking each task
          <TaskItem
            key={task.id}     //using key to list items
            task={task}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
