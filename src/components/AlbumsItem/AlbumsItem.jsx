import React from "react";
import list from "../../assets/list.json";

const AlbumsItem = () => {
  const albumsList = list.albums.items;

  const result = albumsList.map(({ name, id, album_type, images }) => {
    return (
      <li key={id} className="music-item">
        <figure>
          <img src={images[1].url} />
          <figcaption>{name}</figcaption>
        </figure>
      </li>
    );
  });
  return result;
};

export default AlbumsItem;
