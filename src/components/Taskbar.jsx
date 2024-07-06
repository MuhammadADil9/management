import { Outlet, useNavigate, Link } from "react-router-dom";
import "../assets/style.css";
import { useState, useEffect, useContext } from "react";
import { taskContext } from "./Dashboard";


function Taskbar() {
  const taskArr = useContext(taskContext);
  const [Elem, setElem] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    setElem(taskArr);
  }, [taskArr]);

  return (
    <>
      <div className="sidebar">
        <button>
          <Link to="/dashboard">
          <h2>Tasks</h2>
          </Link>
        </button>
        <div>
          {Elem.map((indElem, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  navigation(`/dashboard/${indElem}`);
                }}
              >
                <h1>{indElem}</h1>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Taskbar;
