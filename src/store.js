import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import FavouritesSlice from "./features/Favourites/FavouritesSlice";
import ErrorsSlice from "./features/Errors/ErrorsSlice";
const middleware = [...getDefaultMiddleware()];
export const store = configureStore({
  reducer: {
    favourites: FavouritesSlice,
    errors: ErrorsSlice,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
