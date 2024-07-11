import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "../assets/style.css";

const Taskbar = React.memo(({ value }) => {
  const [importedTasks, setImportedTask] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setImportedTask(value);
  }, [value]);

  return (
    <>
      <div className="sidebar">
        <button onClick={() => navigate("/dashboard")}>
          <h2>Tasks</h2>
        </button>
        <div>
          {importedTasks.map((indexedKey,index)=>(
            <button key={index} onClick={()=>{navigate(`/dashboard/${Object.keys(indexedKey)}`)}} >
              {Object.keys(indexedKey)}
            </button>
          ))}       
        </div>
      </div>
    </>
  );
});

export default Taskbar;

// {importedTasks.map((iteratedElem, index) => (
//   Object.keys(iteratedElem).map((key) => (
//     <button key={index} onClick={() => navigate(`/dashboard/${key}`)} id={key}>
//       <h1>{key}</h1>
//     </button>
//   ))
// ))}


