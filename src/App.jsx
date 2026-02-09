import { useEffect, useContext } from "react";  //do smthg after ui loads/uploads anything,uc-used for accesing global or shared data
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskProvider, TaskContext } from "./context/TaskContext";
import useFetchTasks from "./hooks/useFetchTasks";   //custom hook
 
const MainApp = () => {

  const { setTasks } = useContext(TaskContext);  //accessing global data

  const apiTasks = useFetchTasks(
    "https://jsonplaceholder.typicode.com/todos?_limit=3"
  );

  // Mount lifecycle
  useEffect(() => {
    console.log("Component Mounted");
  }, []);      //runs only once,runs when component load 1st time

  // Update lifecycle,runs,global tasks update
  useEffect(() => {
    setTasks(apiTasks);  
  }, [apiTasks, setTasks]);
//dependency array,any of these change,runs


  // Cleanup lifecycle,componts removing when app is closed
  useEffect(() => {
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Smart Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

function App() {
  return (
    <TaskProvider>
      <MainApp />
    </TaskProvider>
  );
}

export default App;
