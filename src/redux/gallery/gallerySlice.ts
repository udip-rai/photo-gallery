// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";
// import { RootState } from "redux/store";
// import { SinglePhotoType } from "schemas/PhotoDetailSchema";

// export const getPhotos: any = createAsyncThunk("photos/getPhotos", async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/photos"
//   );
//   return response.data;
// });

// const photoGallery = createSlice({
//   name: "photoGallery",
//   initialState: {
//     value: [],
//   },
//   reducers: {
//     allPhotos: (state: any) => {
//       state.value = getPhotos;
//
//     },
//     filteredPhotos: (state: any, action: PayloadAction<number>) => {
//       const filtered = getPhotos?.filter?.(
//         (item: SinglePhotoType) => item?.albumId === action.payload
//       );
//       state.value = filtered;
//     },
//   },
// });
// export const { allPhotos, filteredPhotos } = photoGallery.actions;

// export default photoGallery.reducer;

export {};
