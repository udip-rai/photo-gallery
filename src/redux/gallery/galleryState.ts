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
    // filteredPhotos: [],
    // albumId: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPhotos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPhotos.fulfilled, (state, action) => {
        state.photos = action.payload;
        state.isLoading = false;
      })
      .addCase(getPhotos.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default gallerySlice.reducer;
