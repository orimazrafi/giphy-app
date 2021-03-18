import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { formatUrl } from "../../helpers";
import Input from "../Input/Input";
import { useFilters } from "../../hooks";

const Trending = () => {
  const [gifs, setGifs] = useState([]);
  const [handleChange, filters] = useFilters({
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
