import React from "react";
import SinglesItem from "../SinglesItem/SinglesItem";
import "./SinglesList.scss";

const SinglesList = () => {
  return (
    <ul className="music-list">
      <SinglesItem />
    </ul>
  );
};

export default SinglesList;
