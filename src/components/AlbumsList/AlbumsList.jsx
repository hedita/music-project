import React from "react";
import AlbumsItem from "../AlbumsItem/AlbumsItem";
import "./AlbumsList.scss";
import list from "../../assets/list.json";

const AlbumsList = () => {
  return (
    <ul className="music-list">
      {list.albums.items.map(({ name, artists, album_type, id, images }) => {
        if (album_type === "album") {
          return <AlbumsItem key={id} name={name} artists={artists} id={id} images={images} />;
        }
      })}
    </ul>
  );
};

export default AlbumsList;
