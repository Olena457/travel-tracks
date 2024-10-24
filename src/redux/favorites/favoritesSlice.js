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
import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
  },
  reducers: {
    changeFavorite: {
      reducer(state, action) {
        state.favorite.push(action.payload);
      },
    },
    deleteFavorite: {
      reducer(state, action) {
        state.favorite = state.favorite.filter(item => item !== action.payload);
      },
    },
  },
});

export const { changeFavorite, deleteFavorite } = favoriteSlice.actions;
export const favoritesReducer = favoriteSlice.reducer;
