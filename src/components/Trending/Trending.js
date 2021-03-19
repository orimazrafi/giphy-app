import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { formatUrl } from "../../helpers";
import Input from "../Input/Input";
import { useInput } from "../../hooks";
import { useDispatch } from "react-redux";
import { setGif } from "../../features/Favourites/FavouritesSlice";

const Trending = () => {
  const dispatch = useDispatch();
  const [gifs, setGifs] = useState([]);
  const [filters, handleChange] = useInput({
    limit: 0,
    offset: 0,
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
            alt={gif.title}
          />
        ))}
      </div>
    </>
  );
};

export default Trending;
