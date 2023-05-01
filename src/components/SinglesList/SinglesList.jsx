import React from "react";
import SinglesItem from "../SinglesItem/SinglesItem";
import Sidebar from "../Sidebar/Sidebar";
import "./SinglesList.scss";

const SinglesList = () => {
  return (
    <div className="content">
      <Sidebar />
      <div className="singles-list">
        <h1 className="title">Singles</h1>
        <ul className="music-list">
          <SinglesItem />
        </ul>
      </div>
    </div>
  );
};

export default SinglesList;
