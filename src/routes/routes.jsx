import { Routes, Route } from "react-router-dom";
import Landing from '../components/Landing.jsx';
import {Dashboard} from '../components/Dashboard.jsx';
import NoRoute from '../components/NoRoute.jsx';
import Signup from '../components/Signup.jsx';
import "../assets/style.css"


const RouteerPath = () => {
  return (
    <>
    <div className="Router">
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="home" element={<Landing />} />
      <Route path="dashboard" element={<Dashboard />}>
      </Route>
      <Route path="*" element={<NoRoute />} />
    </Routes>
    </div>
    </>
  );
}

export default RouteerPath;

{/* <Route path=':taskId' element={<TaskComponent />} /> */}