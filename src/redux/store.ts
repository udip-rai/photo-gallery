import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./gallery/galleryState";

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
});
