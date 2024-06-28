import { Routes, Route } from "react-router-dom";
import Landing from './Landing.jsx';
import Dashboard from './Dashboard.jsx';
import Taskbar from './Taskbar.jsx';
import Activities from './Activities.jsx';
import NoRoute from './NoRoute.jsx';
import Signup from './Signup.jsx';
import TaskComponent from './task.jsx';

const RouteerPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="home" element={<Landing />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="taskbar" element={<Taskbar />}>
          <Route path="task/:taskId" element={<TaskComponent />} />
        </Route>
      </Route>
      <Route path="*" element={<NoRoute />} />
    </Routes>
  );
}

export default RouteerPath;
