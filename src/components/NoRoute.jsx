import { Link } from "react-router-dom"



function NoRoute(){
    return(
        <>
            <div>
                <h1>Lost Somewhere ?</h1>
                <p>Return to Home Page</p>
                <Link to="/">Home</Link>
            </div>
        </>
    )
}

export default NoRoute