// import { createSlice } from '@reduxjs/toolkit';

// const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState: {
//     favorites: [],
//   },
//   reducers: {
//     addFavorites: (state, action) => {
//       // const vehicle = action.payload;
//       state.favorites.push(vehicle);
//       state.favorites.push(action.payload);
//     },
//     removeFavorites: (state, action) => {
//       const vehicleId = action.payload.id;
//       state.favorites = state.favorites.filter(
//         vehicle => vehicle.id !== vehicleId
//       );
//     },
//   },
// });

// export const { addFavorites, removeFavorites } = favoritesSlice.actions;
// export const favoriteReducer = favoritesSlice.reducer;
// // export default favoritesSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';

// const favoriteSlice = createSlice({
//   name: 'favorite',
//   initialState: {
//     favorite: [],
//   },
//   reducers: {
//     changeFavorite: (state, action) => {
//       const venicleId = action.payload.id;
//       ;
//       const existingIndex = state.favorite.findIndex(id => id === vehicleId);

//       if (existingIndex >= 0) {
//         state.favorite.splice(existingIndex, 1);
//       } else {
//         state.favorite.push(vehicleId);
//       }

//   },
// });

// export const { changeFavorite, deleteFavorite } = favoriteSlice.actions;
// export const favoritesReducer = favoriteSlice.reducer;
// export default favoritesReducer;

// state.favorite = state.favorite.filter(item => item !== action.payload);
import { createSlice } from '@reduxjs/toolkit';
const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
  },
  reducers: {
    changeFavorite: (state, action) => {
      const favoriteId = action.payload.id;
      const existingIndex = state.favorite.findIndex(id => id === favoriteId);

      if (existingIndex >= 0) {
        state.favorite.splice(existingIndex, 1);
      } else {
        state.favorite.push(favoriteId);
      }
    },
    removeFavorite: (state, action) => {
      const favoriteId = action.payload.id;
      state.favorite = state.favorite.filter(id => id !== favoriteId);
    },
  },
});

export const { changeFavorite, removeFavorite } = favoriteSlice.actions;
export const favoritesReducer = favoriteSlice.reducer;
export default favoritesReducer;
