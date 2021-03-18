import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { formatUrl } from "../../helpers";
import Input from "../Input/Input";
import { useFilters } from "../../hooks";
import { useDispatch } from "react-redux";
import { setGif } from "../../features/Favourites/FavouritesSlice";
const Search = () => {
  const dispatch = useDispatch();
  const [gifs, setGifs] = useState([]);
  const [handleChange, filters] = useFilters({
    search: "",
    limit: 0,
    offset: 0,
  });

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
                filter={filters.search}
                onChange={handleChange}
                name="search"
                type="text"
                placeholder="Enter Search..."
                title="Search"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Input
                filter={filters.limit}
                onChange={handleChange}
                name="limit"
                type="number"
                placeholder="Enter Limit..."
                title="Limit"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Input
                filter={filters.offset}
                onChange={handleChange}
                name="offset"
                type="number"
                placeholder="Enter Offset..."
                title="Offset"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" type="submit" onClick={submit}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <div style={{ float: "left" }}>
        {gifs.map((gif) => (
          <img
            onClick={() => dispatch(setGif(gif))}
            key={Math.random()}
            src={`${gif.images.fixed_height_downsampled.url}`}
            alt="this slowpoke moves"
          />
        ))}
      </div>
    </>
  );
};

export default Search;
