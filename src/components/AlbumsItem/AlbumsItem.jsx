import React from "react";
import list from "../../assets/list.json";

const AlbumsItem = () => {
  const result = list.albums.items.map(({ name, id, album_type, artists, images }) => {
    if (album_type === "album") {
      return (
        <li key={id} className="music-item">
          <figure>
            <img src={images[1].url} />
            <figcaption>{name}</figcaption>
            <p>{artists[0].name}</p>
          </figure>
        </li>
      );
    }
  });
  return result;
};

export default AlbumsItem;
