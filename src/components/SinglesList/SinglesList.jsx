import React from "react";
import SinglesItem from "../SinglesItem/SinglesItem";
import "./SinglesList.scss";
import list from "../../assets/list.json";

const SinglesList = () => {
  return (
    <ul className="music-list">
      {list.albums.items.map(({ name, artists, album_type, id, images }) => {
        if (album_type === "single") {
          return (
            <SinglesItem
              key={id}
              name={name}
              artists={artists}
              id={id}
              images={images}
            />
          );
        }
      })}
    </ul>
  );
};

export default SinglesList;
