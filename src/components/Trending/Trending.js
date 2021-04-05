import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { formatUrl } from "../../helpers";
import { useInput } from "../../hooks";
import { useDispatch } from "react-redux";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ErrorBoundryComponent from "../ErrorBoundryComponent/ErrorBoundryComponent";
import { setError } from "../../features/Errors/ErrorsSlice";
import { TRANDEING } from "../../constants";
import GifsComponent from "../GifsComponenet/GifsComponent";
import FormComponent from "../FormComponent/FormComponent"
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
        <FormComponent
          array={[{ name: "limit", type: "number", validation: false }, { name: "offset", type: "number", validation: false }]}
          filters={filters}
          handleChange={handleChange}
          handleError={null}
          errors={null}
          submit={submit}
        />
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
