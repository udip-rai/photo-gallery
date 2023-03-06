import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk("photos/getPhotos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  return await response.json();
});

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    photos: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getPhotos.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [getPhotos.fulfilled.toString()]: (state, action) => {
      state.photos = action.payload;
      state.isLoading = false;
    },
    [getPhotos.rejected.toString()]: (state) => {
      state.isLoading = false;
    },
  },
});

export default gallerySlice.reducer;
