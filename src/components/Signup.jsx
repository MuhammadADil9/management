import { useNavigate } from "react-router-dom";


function Signup(){
    const navigate = useNavigate();
    return(
        <>
            <div>
                <h1>Login</h1>
                <button onClick={()=>{
                    navigate('/home')
                }}>Sign In</button>
            </div>
        </>
    )
}


export default Signup