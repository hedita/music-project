import React from "react";
import list from "../../assets/list.json";

const SinglesItem = () => {

  return list.albums.items.map(({ name, artists, album_type, id, images }) => {
    if (album_type === "single") {
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
};

export default SinglesItem;
