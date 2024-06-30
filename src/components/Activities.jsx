import { useState } from "react"
import { div } from "three/examples/jsm/nodes/Nodes.js";

function Activities(){

    const[act,setAct] = useState([])
    const[task,setTask] = useState();

    const addActivity = () => { 
        let Setcomponent = (
        <div>
            <h1>{task}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, eos?</p>
        </div>
        )    
        
        setAct([...act,Setcomponent])
        
        setTask("");
    }
    
    return(
        <>
        <div className="activities">
            <br />
            <h1>Schdeule Your Day</h1>
            <br />

            <label htmlFor="task">Please Enter Your Task</label>
            <input type="text" name="task" id="task"  onChange={(e)=>{
                setTask(e.target.value)
            }}/>

            <button onClick={addActivity}>Add</button>
            
            <div className="activitiesBar">
            
            {act.map((Task,index)=>(
                <div id={index} >
                    {Task}
                </div>
            ))}
            
            </div>
        </div>

        </>
    )

}

export default Activities




