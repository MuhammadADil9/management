import "./assets/Landing.css"
import { Link } from "react-router-dom"

function Landing(){
    return(
        <>
        <div className="landing">
        <h1>Welcome To The App</h1>
        <h2><Link to="/dashboard">Dashboard</Link></h2>
        <h2><Link to="/history" >Work History</Link></h2>
        <h2><Link to="/account">Accont</Link></h2>
        </div>
        </>
    )
}


export default Landing
