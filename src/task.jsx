import { useParams } from "react-router-dom"

const TaskComponent = () => {
    
const {taskId} = useParams();
    
    return(
        <>
        <h1>{taskId}</h1>
        <p>Task Scheduled</p>
        </>
    )

}

export default TaskComponent

