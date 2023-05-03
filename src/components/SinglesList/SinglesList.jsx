import React from "react";
import MusicItem from "../MusicItem/MusicItem";
import "./SinglesList.scss";
import list from "../../assets/list.json";

const SinglesList = () => {
  return (
    <ul className="music-list">
      {list.albums.items.map(({ name, artists, album_type, id, images }) => {
        if (album_type === "single") {
          return (
            <MusicItem
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
