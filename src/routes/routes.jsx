import { Routes, Route } from "react-router-dom";
import Landing from '../components/Landing.jsx';
import Dashboard from '../components/Dashboard.jsx';
import Taskbar from '../components/Taskbar.jsx';
import Activities from '../components/Activities.jsx';
import NoRoute from '../components/NoRoute.jsx';
import Signup from '../components/Signup.jsx';
import TaskComponent from '../components/task.jsx';

const RouteerPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="home" element={<Landing />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="taskbar" element={<Taskbar />}>
          <Route path=':taskId' element={<TaskComponent />} />
        </Route>
      </Route>
      <Route path="*" element={<NoRoute />} />
    </Routes>
  );
}

export default RouteerPath;
