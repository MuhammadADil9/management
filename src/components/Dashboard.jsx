import { Outlet } from "react-router-dom";
import Taskbar from "./Taskbar";
import { useState,createContext,useRef } from "react";



//const TaskContext = createContext();

function DashBoard() {

  // const [task, SetTask] = useState("");
  const [taskArr, settaskArr] = useState([])
  const inpVal = useRef("")

  const addTask = () => {
    let val = inpVal.current.value
    settaskArr([...taskArr, val]);
    
    fetch("http://localhost:5175/addtask",{
      method:"POST",
      headers:{
        "Content-Type" : "application/Json"
      },
      body : JSON.stringify({val}),
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))
    
    inpVal.current.value = ""
  };

  return (
    <>
        <Taskbar value={taskArr}/>
      

      <div>
        <h1>Schedule Your day</h1>
        <br />
        <label htmlFor="">Your Task is Awaiting</label>
        <br />
        <input type="text" name="task" id="task" ref={inpVal} />
        <button onClick={addTask}>Submit</button>
      </div>
      <Outlet />
    </>
  );
}

export default DashBoard



