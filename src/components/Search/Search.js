import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { formatUrl } from "../../helpers";
import { useInput } from "../../hooks";
import { useDispatch } from "react-redux";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ErrorBoundryComponent from "../ErrorBoundryComponent/ErrorBoundryComponent";
import { setError } from "../../features/Errors/ErrorsSlice";
import { SEARCH } from "../../constants";
import GifsComponent from "../GifsComponenet/GifsComponent";
import FormComponent from "../FormComponent/FormComponent";

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
        <FormComponent
          array={[{ name: "search", type: "text", validation: true }, { name: "limit", type: "number", validation: false }, { name: "offset", type: "number", validation: false }]}
          filters={filters}
          handleChange={handleChange}
          handleError={handleError}
          errors={errors}
          submit={submit}
          disabled={{ field: filters.search, disabled: true }}
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

export default ErrorBoundryComponent(Search);
