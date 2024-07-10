import { Outlet, useNavigate, Link } from "react-router-dom";
import "../assets/style.css";
import { useState, useEffect, useContext } from "react";
// import { TaskContext } from "./Dashboard";


function Taskbar({value}) {
  // const taskArr = useContext(TaskContext);
  const [importedTasks, setImportedTask] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    setImportedTask(value);
  }, [value]);

  return (
    <>
      <div className="sidebar">
        <button onClick={()=>{
          navigation("dashboard")
        }} >
          <h2>Tasks</h2>
        </button>
        <div>
          {importedTasks.map((iteratedElem, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  navigation(`/dashboard/${iteratedElem}`);
                }}
              >
                <h1>{importedTasks}</h1>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Taskbar;
