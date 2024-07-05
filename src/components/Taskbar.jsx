// import { Outlet } from "react-router-dom";
// import "../assets/style.css";
// import { useState } from "react";
// import { taskContext } from "./Dashboard";
// import { useContext } from "react";
// import { useEffect } from "react";
// import { div } from "three/examples/jsm/nodes/Nodes.js";

// function Taskbar() {
//   const { taskArr } = useContext(taskContext);
//   const [Elem, setElem] = useState([]);

//   useEffect(() => {
//     setElem(taskArr);
//   }, [taskArr]);

//   return (
//     <>
//       <div className="sidebar">
//         <h2>Tasks</h2>
//         <div>{Elem.map((indElem, index) => {
//          <div className={index}>
//             <h1>{indElem}</h1>
//          </div>
//         })}</div>
//       </div>
//     </>
//   );
// }

// export default Taskbar;
