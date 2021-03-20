import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Row, Col } from "react-bootstrap";
import { formatUrl, isSelected } from "../../helpers";
import Input from "../Input/Input";
import { useInput } from "../../hooks";
import { useSelector, useDispatch } from "react-redux";
import { setGif } from "../../features/Favourites/FavouritesSlice";
import { GifWrapper } from "../../elements";
import { gifsArray } from "../../features/Favourites/FavouritesSlice";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

const Trending = () => {
  const favouriteGifs = useSelector(gifsArray);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [gifs, setGifs] = useState([]);
  const [filters, handleChange] = useInput({
    limit: 10,
    offset: 1,
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const trendingGifs = await axios.get(
        formatUrl("trending", [
          { filter: "limit", value: filters.limit },
          { filter: "offset", value: filters.offset },
        ])
      );
      setGifs(trendingGifs.data.data);
      setLoading(false);
    } catch (ex) {
      setLoading(false);
    }
  };

  return (
    <>
      <div>Trending Please filter out:</div>
      <Container fluid>
        <Form>
          <Row>
            <Col xs={3}>
              <Input
                value={filters.limit}
                onChange={handleChange}
                name="limit"
                type="number"
                size={4}
              />
            </Col>
            <Col xs={3}>
              <Input
                value={filters.offset}
                onChange={handleChange}
                name="offset"
                type="number"
                size={4}
              />
            </Col>
            <Col>
              <ButtonComponent name="Submit" submit={submit} size={4} />
            </Col>
          </Row>
        </Form>
      </Container>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default Trending;
