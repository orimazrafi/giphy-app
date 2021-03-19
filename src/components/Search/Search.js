import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { formatUrl, isSelected } from "../../helpers";
import Input from "../Input/Input";
import { useInput } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { setGif } from "../../features/Favourites/FavouritesSlice";
import { GifWrapper } from "../../elements";
import { gifsArray } from "../../features/Favourites/FavouritesSlice";

const Search = () => {
  const favouriteGifs = useSelector(gifsArray);
  const dispatch = useDispatch();
  const [gifs, setGifs] = useState([]);
  const [filters, handleChange] = useInput({
    search: "star",
    limit: 10,
    offset: 10,
  });
  const [errors, handleError] = useInput();

  const submit = async (e) => {
    e.preventDefault();
    const trendingGifs = await axios.get(
      formatUrl("search", [
        { filter: "q", value: filters.search },
        { filter: "limit", value: filters.limit },
        { filter: "offset", value: filters.offset },
      ])
    );
    setGifs(trendingGifs.data.data);
  };

  return (
    <>
      <div>Search</div>
      <div>Please filter out:</div>
      <Container fluid>
        <Form>
          <Row>
            <Col xs={4}>
              <Input
                value={filters.search}
                onChange={handleChange}
                name="search"
                type="text"
                validation
                handleBlur={handleError}
                errors={errors}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Input
                value={filters.limit}
                onChange={handleChange}
                name="limit"
                type="number"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Input
                value={filters.offset}
                onChange={handleChange}
                name="offset"
                type="number"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="primary"
                type="submit"
                onClick={submit}
                disabled={!filters.search}
              >
                Submit
              </Button>
            </Col>
          </Row>
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

export default Search;
