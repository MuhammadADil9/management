import { Outlet } from "react-router-dom";
import "./assets/style.css"
import { useState } from "react"

function Taskbar(){
   
   const [task,setTask] = useState("");
   const [activities,setActivities] = useState([])
   

   const addElement = () => {

      const newElement = (
      
         <h1>{task}</h1>
      
      )

      setActivities([...activities, newElement])
      setTask("")
   }


   return(
   <>
    <div className="sidebar">
      
   <label htmlFor="task">Task</label>
   <input type="text" name="task" id="task" value={task} onChange={(e)=>setTask(e.target.value)}/>
   <br/>
   <button onClick={addElement}>Add</button>
      
      <div className="tasks">
             {activities.map((activity, index) => (
             <div key={index}>{activity}</div>
            ))}
      </div>
   
    </div>
    
    <Outlet/>

    </>
   )
}

export default Taskbar