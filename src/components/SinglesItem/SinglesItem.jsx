import React from "react";

const SinglesItem = ({ id, name, images, artists }) => {
  return (
    <li className="music-item">
      <figure>
        <img src={images[1].url} />
        <figcaption>{name}</figcaption>
        <p>{artists[0].name}</p>
      </figure>
    </li>
  );
};

export default SinglesItem;
