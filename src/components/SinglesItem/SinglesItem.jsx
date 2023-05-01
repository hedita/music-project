import React from "react";
import list from "../../assets/list.json";

const SinglesItem = () => {
  const singlesList = list.albums.items;

  const result = singlesList.map(({ name, id, images }) => {
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

export default SinglesItem;
