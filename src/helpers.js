import { NOT_FOUND } from "./constants";
import { ErrorWrapper } from "./elements";
export const formatUrl = (type, filters) => {
  const filtersString = filters
    .map((filter) => `&${filter.filter}=${filter.value}`)
    .join("");
  return `https://api.giphy.com/v1/gifs/${type}?api_key=${process.env.REACT_APP_API_KEY}${filtersString}`;
};

export const inputValidation = (errors, field, value) => (
  <ErrorWrapper>
    {errors &&
      errors[field] === "" &&
      !value &&
      `${capitalizeFirstLetter(field)} is required`}
  </ErrorWrapper>
);

export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const isSelected = (favouriteGifs, gif) => {
  return (
    favouriteGifs.findIndex((favouriteGif) => favouriteGif.id === gif.id) ===
    NOT_FOUND
  );
};
