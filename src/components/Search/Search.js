import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Row, Col } from "react-bootstrap";
import { formatUrl, isSelected } from "../../helpers";
import Input from "../Input/Input";
import { useInput } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { setGif } from "../../features/Favourites/FavouritesSlice";
import { GifWrapper, GifsContainer } from "../../elements";
import { gifsArray } from "../../features/Favourites/FavouritesSlice";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ErrorBoundryComponent from "../ErrorBoundryComponent/ErrorBoundryComponent";
import { setError } from "../../features/Errors/ErrorsSlice";
import { SEARCH } from "../../constants";

const Search = () => {
  const [filters, handleChange] = useInput({
    search: "star",
    limit: 10,
    offset: 10,
  });
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);
  const dispatch = useDispatch();

  const [errors, handleError] = useInput();

  const submit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const trendingGifs = await axios.get(
        formatUrl("search", [
          { filter: "q", value: filters.search },
          { filter: "limit", value: filters.limit },
          { filter: "offset", value: filters.offset },
        ])
      );
      setGifs(trendingGifs.data.data);
      setLoading(false);
    } catch (ex) {
      setLoading(false);
      dispatch(setError({ message: ex.message, component: SEARCH }));
    }
  };

  const favouriteGifs = useSelector(gifsArray);

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
      )}
    </>
  );
};

export default ErrorBoundryComponent(Search);
