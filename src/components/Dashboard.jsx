import { Outlet } from "react-router-dom";
import Taskbar from "./Taskbar";
import { useState } from "react";
import { createContext } from "react";

const taskContext = createContext([])

function Dashboard() {

    const [task,SetTask] = useState([]);


    return (
    <>
      <Taskbar />
      <div>
        <h1>Schedule Your day</h1>
        <br />
        <label htmlFor="">Your Task is Awaiting</label>
        <input type="text" name="task" id="task"/>
        <button>Submit</button>
      </div>
      <Outlet />
    </>
  );
}

export default Dashboard;
