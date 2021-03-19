import React, { useState } from "react";
import axios from "axios";
import { Container, Form } from "react-bootstrap";
import { formatUrl, isSelected } from "../../helpers";
import Input from "../Input/Input";
import { useInput } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { setGif } from "../../features/Favourites/FavouritesSlice";
import { GifWrapper } from "../../elements";
import { gifsArray } from "../../features/Favourites/FavouritesSlice";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const Trending = () => {
  const favouriteGifs = useSelector(gifsArray);
  const dispatch = useDispatch();
  const [gifs, setGifs] = useState([]);
  const [filters, handleChange] = useInput({
    limit: 10,
    offset: 1,
  });

  const submit = async (e) => {
    e.preventDefault();
    const trendingGifs = await axios.get(
      formatUrl("trending", [
        { filter: "limit", value: filters.limit },
        { filter: "offset", value: filters.offset },
      ])
    );
    setGifs(trendingGifs.data.data);
  };

  return (
    <>
      <div>Trending</div>
      <div>Please filter out:</div>
      <Container fluid>
        <Form>
          <Input
            value={filters.limit}
            onChange={handleChange}
            name="limit"
            type="number"
            size={4}
          />
          <Input
            value={filters.offset}
            onChange={handleChange}
            name="offset"
            type="number"
            size={4}
          />
          <ButtonComponent name="Submit" submit={submit} size={4} />
        </Form>
      </Container>
      <div style={{ float: "left" }}>
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
      </div>
    </>
  );
};

export default Trending;
