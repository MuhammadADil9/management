import { Outlet } from "react-router-dom";
import Taskbar from "./Taskbar";
import { useState } from "react";
import { createContext } from "react";

const taskContext = createContext();

function Dashboard() {

  const [task, SetTask] = useState("");
  const [taskArr, settaskArr] = useState([])

  const addTask = () => {
    settaskArr([...taskArr, task]);
  };

  return (
    <>
      <taskContext.Provider value={taskArr}>
        <Taskbar />
      </taskContext.Provider>

      <div>
        <h1>Schedule Your day</h1>
        <br />
        <label htmlFor="">Your Task is Awaiting</label>
        <input type="text" name="task" id="task" onChange={(e)=>SetTask(e.target.value)} />
        <button onChange={addTask}>Submit</button>
      </div>
      <Outlet />
    </>
  );
}

export default Dashboard;
