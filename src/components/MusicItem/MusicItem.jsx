import React from "react";
import "./MusicItem.scss";

const MusicItem = ({ id, name, images, artists }) => {
  return (
    <li className="music-item">
      <figure>
        <img id="music-item-img" src={images[1].url} />
        <figcaption>{name}</figcaption>
        <p>{artists[0].name}</p>
      </figure>
    </li>
  );
};

export default MusicItem;
