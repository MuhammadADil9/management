import { useNavigate } from "react-router-dom";
import "../assets/style.css"

function Signup(){
    const navigate = useNavigate();
    return(
        <>
            <div className="Signup">
                <h1>Login</h1>
                <button onClick={()=>{
                    navigate('/home')
                }}>Sign In</button>
            </div>
        </>
    )
}


export default Signup