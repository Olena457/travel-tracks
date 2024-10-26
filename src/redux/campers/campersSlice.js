// import { createSlice } from '@reduxjs/toolkit';

// const campersInitialState = {
//   favorites: [],
//   page: 1,
//   perPage: 4,
//   sortOrder: 'asc',
//   sortBy: '_id',
//   deleteStatus: null,
// };

// const campersSlice = createSlice({
//   name: 'campers',
//   initialState: campersInitialState,
//   reducers: {
//     toggleFavorite: (state, action) => {
//       const id = action.payload;
//       const index = state.favorites.indexOf(id);
//       if (index !== -1) {
//         state.favorites.splice(index, 1);
//       } else {
//         state.favorites.push(id);
//       }
//     },
//     removeFavorite: (state, action) => {
//       const id = action.payload;
//       state.favorites = state.favorites.filter(favId => favId !== id);
//     },
//     setPage: (state, action) => {
//       state.page = action.payload;
//     },
//
//     setDeleteStatus: (state, action) => {
//       state.deleteStatus = action.payload;
//     },
//   },
// });

// export const {
//   toggleFavorite,
//   removeFavorite,
//   setPage,
//   setPerPage,
//   setSortBy,
//   setSortOrder,
//   setDeleteStatus,
// } = campersSlice.actions;

// export const campersReducer = campersSlice.reducer;
// ____________________________________________________
//
// import { createSlice } from '@reduxjs/toolkit';
// import { fetchCamperById } from '../operation.js';

// const campersSlice = createSlice({
//   name: 'campers',
//   initialState: {
//     items: [],
//     page: 1,
//     total: 1,
//     selectedCamper: null,
//     favorites: 'favorites' || [],
//
//   },
//   reducers: {
//     toggleFavorite: (state, action) => {
//       const camperId = action.payload;
//       const isFavorite = state.favorites.some(fav => fav.id === camperId);

//       if (!isFavorite) {
//         const camperToAdd = state.items.find(camper => camper.id === camperId);
//         if (camperToAdd) {
//           state.favorites.push(camperToAdd);
//         }
//       } else {
//         state.favorites = state.favorites.filter(fav => fav.id !== camperId);
//       }
//
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchCampers.pending, state => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCampers.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchCamperById.pending, state => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCamperById.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.selectedCamper = action.payload;
//       });
//   },
// });

// export const { toggleFavorite } = campersSlice.actions;
// export default campersSlice.reducer;
