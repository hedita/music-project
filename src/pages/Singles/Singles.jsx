import React from "react";
import "./Singles.scss";
import Sidebar from "../../components/Sidebar/Sidebar";

const Singles = () => {
  return (
    <div className="content">
      <Sidebar />
      <div className="singles-list">
        <h1 className="singles-title">Singles</h1>
        <ul className="music-list">
          <li>music</li>
          <li>music</li>
          <li>music</li>
          <li>music</li>
          <li>music</li>
          <li>music</li>
          <li>music</li>
          <li>music</li>
          <li>music</li>
          <li>music</li>
        </ul>
      </div>
    </div>
  );
};

export default Singles;
