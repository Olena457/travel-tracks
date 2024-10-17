// ______________________________________________________________________
// import { createSlice } from '@reduxjs/toolkit';

// const campersInitialState = {
//   favorites: [],
//   page: 1,
//   perPage: 4,
//   sortOrder: 'asc',
//   sortBy: '_id',
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
//       state.favorites = state.favorites.filter(favoriteId => favoriteId !== id);
//     },
//     setPage: (state, action) => {
//       state.page = action.payload;
//     },
//     setPerPage: (state, action) => {
//       state.perPage = action.payload;
//     },
//     setSortBy: (state, action) => {
//       state.sortBy = action.payload;
//     },
//     setSortOrder: (state, action) => {
//       state.sortOrder = action.payload;
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
// } = campersSlice.actions;

// export const campersReducer = campersSlice.reducer;
// ___________________________________
import { createSlice } from '@reduxjs/toolkit';

const campersInitialState = {
  favorites: [],
  page: 1,
  perPage: 4,
  sortOrder: 'asc',
  sortBy: '_id',
  deleteStatus: null, //  стейт для видалення
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: campersInitialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const index = state.favorites.indexOf(id);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(id);
      }
    },
    removeFavorite: (state, action) => {
      const id = action.payload;
      state.favorites = state.favorites.filter(favId => favId !== id);
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    // setPerPage: (state, action) => {
    //   state.perPage = action.payload;
    // },
    // setSortBy: (state, action) => {
    //   state.sortBy = action.payload;
    // },
    // setSortOrder: (state, action) => {
    //   state.sortOrder = action.payload;
    // },
    setDeleteStatus: (state, action) => {
      state.deleteStatus = action.payload;
    },
  },
});

export const {
  toggleFavorite,
  removeFavorite,
  setPage,
  // setPerPage,
  // setSortBy,
  // setSortOrder,
  setDeleteStatus,
} = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
