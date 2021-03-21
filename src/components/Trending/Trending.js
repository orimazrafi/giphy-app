import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Row, Col } from "react-bootstrap";
import { formatUrl } from "../../helpers";
import Input from "../Input/Input";
import { useInput } from "../../hooks";
import { useDispatch } from "react-redux";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ErrorBoundryComponent from "../ErrorBoundryComponent/ErrorBoundryComponent";
import { setError } from "../../features/Errors/ErrorsSlice";
import { TRANDEING } from "../../constants";
import GifsComponent from "../GifsComponenet/GifsComponent";

const Trending = () => {
  const [filters, handleChange] = useInput({
    limit: 0,
    offset: 0,
  });

  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);
  const dispatch = useDispatch();
  const [displayNoGifMessage, setDisplayNoGifMessage] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
      setDisplayNoGifMessage(false);
      setLoading(true);
      const trendingGifs = await axios.get(
        formatUrl("trending", [
          { filter: "limit", value: filters.limit },
          { filter: "offset", value: filters.offset },
        ])
      );
      if (trendingGifs?.data?.data?.length === 0) setDisplayNoGifMessage(true);
      setGifs(trendingGifs?.data?.data);
      setLoading(false);
    } catch (ex) {
      setDisplayNoGifMessage(true);
      setLoading(false);
      dispatch(setError({ message: ex.message, component: TRANDEING }));
    }
  };

  return (
    <>
      <Container fluid>
        <Form>
          <Row>
            <Col xs={3}>
              <Input
                value={filters.limit}
                onChange={handleChange}
                name="limit"
                type="number"
              />
            </Col>
            <Col xs={3}>
              <Input
                value={filters.offset}
                onChange={handleChange}
                name="offset"
                type="number"
              />
            </Col>
            <Col>
              <ButtonComponent name="Submit" submit={submit} />
            </Col>
          </Row>
        </Form>
      </Container>
      {loading ? (
        <LoadingComponent />
      ) : (
        <GifsComponent gifs={gifs} displayNoGifMessage={displayNoGifMessage} />
      )}
    </>
  );
};

export default ErrorBoundryComponent(Trending);
