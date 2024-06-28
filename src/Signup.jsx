import { useNavigate } from "react-router-dom";


function Signup(){
    const navigate = useNavigate();
    return(
        <>
            <div>
                <h1>Login</h1>
                <button onClick={()=>{
                    navigate('/')
                }}>Sign In</button>
            </div>
        </>
    )


}


export default Signup