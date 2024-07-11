import { Outlet } from "react-router-dom";
import Taskbar from "./Taskbar";
import { useState, createContext, useRef, useEffect } from "react";

//const TaskContext = createContext();

function DashBoard() {
  const [taskArray, settaskArray] = useState([]);
  const inpVal = useRef("");

  const addTask = () => {
    let value = inpVal.current.value;
    if (value) {
      console.log("Input Value :- ", value);
      const newTaskObject = { [value]: [] }; // Each key is initialized with an empty array
      settaskArray([...taskArray, newTaskObject]);
      inpVal.current.value = "";
    }
  };

  useEffect(() => {
    console.log("Updated Array:", taskArray);
  }, [taskArray]); // This useEffect will run whenever 'a' changes

  return (
    <>
      <Taskbar value={taskArray} />

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

export default DashBoard;

// fetch("http://localhost:5175/addtask",{
//   method:"POST",
//   headers:{
//     "Content-Type" : "application/Json"
//   },
//   body : JSON.stringify({val}),
// })
// .then((response)=>response.json())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))

// settaskArray([{ val: [] }]);
// console.log("New Object",newTaskObject);
// console.log("Array Task",taskArray);
