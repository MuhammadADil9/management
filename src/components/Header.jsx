import { Link, Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "../assets/NavFot.css"


function Header(){
    return(
        <>
            <div className="header">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/task">Taskbar</Link>
             </div>
            <Outlet/>
        </>
    )
}


export default Header

