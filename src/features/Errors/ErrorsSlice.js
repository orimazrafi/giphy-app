import { createSlice } from "@reduxjs/toolkit";
// import { todoInputSlice } from "../TodoInput/TodoInputSlice";
const errorsSlice = createSlice({
  name: "errors",
  initialState: {
    errors: {},
  },
  reducers: {
    setError: (state, { payload }) => {
      state.errors = payload;
    },
  },
  //   extraReducers: {
  //     [todoInputSlice.actions.edit]: (state, action) => {
  //       state.value++;
  //     },
  //   },
});

export const { setError } = errorsSlice.actions;
export default errorsSlice.reducer;
