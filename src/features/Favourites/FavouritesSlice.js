import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    gifs: [],
  },
  reducers: {
    setGif: (state, { payload }) => {
      state.gifs.push(payload);
    },
  },
});

export const { setGif } = favouritesSlice.actions;
export const gifsArray = (state) => state.favourites.gifs;
export default favouritesSlice.reducer;
