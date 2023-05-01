import React from "react";
import list from "../../assets/list.json";
import "./MusicItem.scss";

const MusicItem = () => {
  const musicList = list.albums.items;

  console.log(list);
  const musics = musicList.map(({ name, id, images }) => {
    return (
      <li key={id} className="music-item">
        <figure>
          <img id="music-item-img" src={images[1].url} />
          <figcaption>{name}</figcaption>
        </figure>
      </li>
    );
  });
  return musics;
};

export default MusicItem;
