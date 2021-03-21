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
import { SEARCH } from "../../constants";
import GifsComponent from "../GifsComponenet/GifsComponent";

const Search = () => {
  const [filters, handleChange] = useInput({
    search: "",
    limit: 0,
    offset: 0,
  });
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);
  const dispatch = useDispatch();
  const [errors, handleError] = useInput();
  const [displayNoGifMessage, setDisplayNoGifMessage] = useState(false);

  const submit = async (e) => {
    try {
      setDisplayNoGifMessage(false);
      setLoading(true);
      e.preventDefault();
      const trendingGifs = await axios.get(
        formatUrl("search", [
          { filter: "q", value: filters.search },
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
      dispatch(setError({ message: ex.message, component: SEARCH }));
    }
  };

  return (
    <>
      <Container fluid>
        <Form>
          <Row>
            <Col xs={3}>
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
            <Col xs={3}>
              <ButtonComponent
                name="Submit"
                submit={submit}
                disabled={!filters.search}
              />
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

export default ErrorBoundryComponent(Search);
