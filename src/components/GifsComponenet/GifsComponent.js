import React from "react";
import { isSelected } from "../../helpers";
import { useSelector, useDispatch } from "react-redux";
import { setGif } from "../../features/Favourites/FavouritesSlice";
import { GifWrapper, GifsContainer } from "../../elements";
import { gifsArray } from "../../features/Favourites/FavouritesSlice";
import styled from "styled-components";

const GifsComponent = ({ gifs, displayNoGifMessage, favourite }) => {
  const favouriteGifs = useSelector(gifsArray);
  const dispatch = useDispatch();

  if (favourite && favouriteGifs.length === 0) {
    return (
      <NoFoundText>
        You have not picked favourites gifs. Please pick from Trending or Search
        before you come here
      </NoFoundText>
    );
  }

  if (displayNoGifMessage)
    return (
      <NoFoundText>
        No gifs were found. Please try a different query...
      </NoFoundText>
    );
  return (
    <GifsContainer>
      {gifs.map((gif) => (
        <GifWrapper
          key={Math.random()}
          src={`${gif.images.fixed_height_downsampled.url}`}
          onClick={() =>
            isSelected(favouriteGifs, gif) && dispatch(setGif(gif))
          }
          alt={gif.title}
          disabled={isSelected(favouriteGifs, gif)}
        />
      ))}
    </GifsContainer>
  );
};
export default GifsComponent;

const NoFoundText = styled.h4`
  margin: 15px;
`;
