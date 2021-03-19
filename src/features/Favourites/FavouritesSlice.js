import { createSlice } from "@reduxjs/toolkit";
// import { todoInputSlice } from "../TodoInput/TodoInputSlice";
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
  //   extraReducers: {
  //     [todoInputSlice.actions.edit]: (state, action) => {
  //       state.value++;
  //     },
  //   },
});

export const { setGif } = favouritesSlice.actions;
export const gifsArray = (state) => state.favourites.gifs;
export default favouritesSlice.reducer;
