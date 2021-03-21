import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useInput } from "../../hooks";
import { Form, Container, Row, Col } from "react-bootstrap";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ErrorBoundryComponent from "../ErrorBoundryComponent/ErrorBoundryComponent";
import { setError } from "../../features/Errors/ErrorsSlice";
import { FAVOURITES } from "../../constants";
import GifsComponent from "../GifsComponenet/GifsComponent";

const Favourites = () => {
  const [displayNoGifMessage, setDisplayNoGifMessage] = useState(false);
  const [favourites, handleChange] = useInput({
    title: "",
  });

  const [loading, setLoading] = useState(false);
  const gifs = useSelector((state) => state.favourites.gifs);
  const dispatch = useDispatch();
  const [filteredGifs, setFilteredGifs] = useState(gifs);
  const search = (e) => {
    try {
      setDisplayNoGifMessage(false);
      e.preventDefault();
      setLoading(true);
      if (!favourites.title) {
        setFilteredGifs(gifs);
        return setLoading(false);
      }
      const filteredByTextGifs = gifs.filter((gif) =>
        gif.title.toLowerCase().includes(favourites.title.toLowerCase())
      );
      if (filteredByTextGifs?.length === 0) setDisplayNoGifMessage(true);
      setFilteredGifs(filteredByTextGifs);

      setLoading(false);
    } catch (ex) {
      setDisplayNoGifMessage(true);
      setLoading(false);
      dispatch(setError({ message: ex.message, component: FAVOURITES }));
    }
  };

  return (
    <>
      <Container fluid>
        <Form>
          <Row>
            <Col xs={3}>
              <Input
                value={favourites.title}
                onChange={handleChange}
                name="title"
                type="text"
              />
            </Col>
            <Col>
              <ButtonComponent name="Submit" submit={search} />
            </Col>
          </Row>
        </Form>
      </Container>
      {loading ? (
        <LoadingComponent />
      ) : (
        <GifsComponent
          gifs={filteredGifs}
          displayNoGifMessage={displayNoGifMessage}
          favourite
        />
      )}
    </>
  );
};
export default ErrorBoundryComponent(Favourites);
