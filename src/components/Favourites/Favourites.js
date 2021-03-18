import React from "react";
import { useSelector } from "react-redux";

const Favourites = () => {
  const gifs = useSelector((state) => state.favourites.gifs);
  return (
    <>
      <div>Favourites</div>
      <div style={{ float: "left" }}>
        {gifs.map((gif) => (
          <img
            key={Math.random()}
            src={`${gif.images.fixed_height_downsampled.url}`}
            alt={gif.title}
          />
        ))}
      </div>
    </>
  );
};

export default Favourites;
