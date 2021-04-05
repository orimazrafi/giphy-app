import { createSlice } from "@reduxjs/toolkit";

const errorsSlice = createSlice({
  name: "errors",
  initialState: {
    errors: {},
  },
  reducers: {
    setError: (state, { payload }) => {
      state.errors[payload.component] = payload;
    },
  },
});

export const { setError } = errorsSlice.actions;
export default errorsSlice.reducer;
