import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useInput } from "../../hooks";
import { Form, Container } from "react-bootstrap";
import Input from "../Input/Input";
import { GifWrapper } from "../../elements";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const Favourites = () => {
  const gifs = useSelector((state) => state.favourites.gifs);
  const [favourites, handleChange] = useInput({
    title: "",
  });
  const [filteredGifs, setFilteredGifs] = useState(gifs);
  const search = (e) => {
    e.preventDefault();
    if (!favourites.title) return setFilteredGifs(gifs);
    setFilteredGifs(
      gifs.filter((gif) =>
        gif.title.toLowerCase().includes(favourites.title.toLowerCase())
      )
    );
  };
  return (
    <>
      <div>Favourites</div>
      <Container fluid>
        <Form>
          <Input
            value={favourites.title}
            onChange={handleChange}
            name="title"
            type="text"
            size={4}
          />
          <ButtonComponent name="Submit" submit={search} size={4} />
        </Form>
      </Container>
      <div style={{ float: "left" }}>
        {filteredGifs.map((gif) => (
          <GifWrapper
            key={Math.random()}
            src={`${gif.images.fixed_height_downsampled.url}`}
            alt={gif.title}
          />
        ))}
      </div>
    </>
  );
};

export default Favourites;
