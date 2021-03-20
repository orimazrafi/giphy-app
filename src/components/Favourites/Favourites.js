import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useInput } from "../../hooks";
import { Form, Container, Row, Col } from "react-bootstrap";
import Input from "../Input/Input";
import { GifWrapper } from "../../elements";
import { useDispatch } from "react-redux";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ErrorBoundryComponent from "../ErrorBoundryComponent/ErrorBoundryComponent";
import { setError } from "../../features/Errors/ErrorsSlice";

const Favourites = () => {
  const [loading, setLoading] = useState(false);
  const gifs = useSelector((state) => state.favourites.gifs);
  const dispatch = useDispatch();
  const [favourites, handleChange] = useInput({
    title: "",
  });
  const [filteredGifs, setFilteredGifs] = useState(gifs);
  const search = (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (!favourites.title) {
        setFilteredGifs(gifs);
        return setLoading(false);
      }
      setFilteredGifs(
        gifs.filter((gif) =>
          gif.title.toLowerCase().includes(favourites.title.toLowerCase())
        )
      );
      setLoading(false);
    } catch (ex) {
      setLoading(false);
      dispatch(setError({ message: ex.message, component: "Favourites" }));
    }
  };

  return (
    <>
      <div>Favourites</div>
      <Container fluid>
        <Form>
          <Row>
            <Col xs={3}>
              <Input
                value={favourites.title}
                onChange={handleChange}
                name="title"
                type="text"
                size={4}
              />
            </Col>
            <Col>
              <ButtonComponent name="Submit" submit={search} size={4} />
            </Col>
          </Row>
        </Form>
      </Container>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          {filteredGifs.map((gif) => (
            <GifWrapper
              key={Math.random()}
              src={`${gif.images.fixed_height_downsampled.url}`}
              alt={gif.title}
            />
          ))}
        </>
      )}
    </>
  );
};
export default ErrorBoundryComponent(Favourites);
