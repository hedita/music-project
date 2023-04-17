import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li className="sidebar-iem">
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to="/PlayLists">PlayLists</Link>
        </li>
        <li>
          <Link to="/Singles">Singles</Link>
        </li>
        <li>
          <Link to="/Albums">Albums</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
