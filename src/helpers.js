export const formatUrl = (type, filters) => {
  const filtersString = filters
    .map((filter) => `&${filter.filter}=${filter.value}`)
    .join("");
  return `https://api.giphy.com/v1/gifs/${type}?api_key=PuUb7zLUSCj82KmilzLEYqVfMU7lHs39${filtersString}`;
};
