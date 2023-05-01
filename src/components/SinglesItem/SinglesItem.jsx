import React from "react";
import list from "../../assets/list.json";

const SinglesItem = () => {
  const singlesList = list.albums.items;

  const result = singlesList.map(({ name, album_type, id, images }) => {
    if (album_type === "single") {
      return (
        <li key={id} className="music-item">
          <figure>
            <img src={images[1].url} />
            <figcaption>{name}</figcaption>
          </figure>
        </li>
      );
    }
  });
  return result;
};

export default SinglesItem;
