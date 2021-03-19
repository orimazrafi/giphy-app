export const formatUrl = (type, filters) => {
  const filtersString = filters
    .map((filter) => `&${filter.filter}=${filter.value}`)
    .join("");
  return `https://api.giphy.com/v1/gifs/${type}?api_key=PuUb7zLUSCj82KmilzLEYqVfMU7lHs39${filtersString}`;
};

export const inputValidation = (errors, field, value) => (
  <span style={{ color: "red" }}>
    {errors &&
      errors[field] === "" &&
      !value &&
      `${capitalizeFirstLetter(field)} is required`}
  </span>
);

export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
