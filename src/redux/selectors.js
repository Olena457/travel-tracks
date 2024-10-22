// import { createSelector } from '@reduxjs/toolkit';

// export const selectCampersList = state => state.campers.items;
// export const selectFavoritesId = state => state.campers.favorites;

// export const selectFavCampers = createSelector(
//   [selectCampersList, selectFavoritesId],
//   (campers, favoritesId) =>
//     campers.filter(camper => favoritesId.includes(camper.id))
// );

//  export const selectPerPage = state => state.campers.perPage;
export const selectCapmers = state => state.campers.items;
export const selectPage = state => state.campers.page;
export const selectFilters = state => state.campers.filters;
export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;
export const selectTotal = state => state.campers.total;
export const selectFavorite = state => state.favorite.favorite;

const itemsPerPage = 5;

export const selectTotalPages = state => {
  return Math.ceil(state.campers.total / itemsPerPage);
};
