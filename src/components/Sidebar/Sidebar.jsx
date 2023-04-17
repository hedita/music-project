import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <ul className="sidebar">
        <li className="sidebar-item">
          <Link className="sidebar-item-link" to={"/"}>
            Home
          </Link>
        </li>
        <li className="sidebar-item">
          <Link className="sidebar-item-link" to="/PlayLists">
            PlayLists
          </Link>
        </li>
        <li className="sidebar-item">
          <Link className="sidebar-item-link" to="/Singles">
            Singles
          </Link>
        </li>
        <li className="sidebar-item">
          <Link className="sidebar-item-link" to="/Albums">
            Albums
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
