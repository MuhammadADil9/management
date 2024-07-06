import { Outlet } from "react-router-dom";
import Taskbar from "./Taskbar";
import { useState } from "react";
import { createContext } from "react";

const taskContext = createContext();

function Dashboard() {

  const [task, SetTask] = useState("");
  const [taskArr, settaskArr] = useState([])

  const addTask = () => {
    console.log("button is working")
    console.log(task)
    settaskArr([...taskArr, task]);
    SetTask("")
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
        <br />
        <input type="text" name="task" id="task" onChange={(e)=>SetTask(e.target.value)} />
        <button onClick={addTask}>Submit</button>
      </div>
      <Outlet />
    </>
  );
}

export {Dashboard, taskContext}
