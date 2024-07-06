import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React from "react";
import { memo } from "react";


const Header = React.memo(() => {
  return (
    <>
      <div className="header">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/task">Taskbar</Link>
      </div>
      <Outlet />
    </>
  );
});

export default Header;
