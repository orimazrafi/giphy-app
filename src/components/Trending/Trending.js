import React, { useEffect, useState } from "react";
import axios from "axios";

const Trending = () => {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    const getGif = async () => {
      const trendingGifs = await axios.get(
        "https://api.giphy.com/v1/gifs/trending?api_key=PuUb7zLUSCj82KmilzLEYqVfMU7lHs39"
      );
      setGifs(trendingGifs.data.data);
    };

    getGif();
  }, []);
  console.log({ gifs });

  return (
    <>
      <div>Trending</div>
      <div>Please filter out:</div>
      <div style={{ float: "left" }}>
        {gifs.map((gif) => (
          <img
            key={Math.random()}
            src={`${gif.images.fixed_height_downsampled.url}`}
            alt="this slowpoke moves"
          />
        ))}
      </div>
    </>
  );
};

export default Trending;
