
import { Outlet } from "react-router-dom"

function Dashboard(){
    return(
        <>
        <div>
        <h1>Dashboard</h1>
        </div>

        <Outlet/>
        </>
    )
}

export default Dashboard