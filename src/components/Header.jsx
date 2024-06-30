import { Link, Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"


function Header(){
    return(
        <>
            <div>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/task">Taskbar</Link>
             </div>
            <Outlet/>
        </>
    )
}


export default Header

