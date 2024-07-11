import { useNavigate, Link } from "react-router-dom";
import "../assets/style.css";
import { useRef } from "react";

function Signup() {


  const navigate = useNavigate();
  const UserName = useRef(); 

let val = {
    name : null,
    jwt : null
}

  const SignupFunction = () => {
    val.jwt = UserName.current.value,

    fetch("http://localhost:5175/api/signup", {
      method: "GET",
      headers: {
        "Content-type": "Application/Json",
      },
      body: JSON.stringify(val),
    })
      .then((data) => data.json)
      .then((data) => {
        val.jwt = data.message
      })
      .then((data) => {
        console.log(data);
      });

    UserName.current.value = "";
  };


  const loginFunc = () => {
        fetch("http://localhost:5175/api/login",{
            method : "GET",
            type : {
                "Content-Type" : "Application/Json"
            },
            body : JSON.stringify(val)

        })
        .then((data)=>data.json())
        .then(data => data)
        .then(data=>{
            console.log(data)
        })
  }


  return (
    <>
      <div className="Signup">
        <label htmlFor="">Name</label>
        <input type="text" name="" id="" ref={UserName} />
        <br />

        {/* ----------------------- */}

        <button
          onClick={() => {
            SignupFunction()
            navigate("/home");
          }}
        >
          Sign In
        </button>
        <br />
        <br />
        <h3>Already a user</h3>
        <button onClick={loginFunc}>
            Login
        </button>
      </div>
    </>
  );
}

export default Signup;
