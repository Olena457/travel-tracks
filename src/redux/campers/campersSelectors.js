import { createSelector } from '@reduxjs/toolkit';

export const selectCampersList = state => state.campers.items;

export const selectFavoritesId = state => state.campers.favorites;

// export const selectFavoritesList = createSelector(
//   [selectCampersList, selectFavoritesId],
//   (campers, favoritesId) => {
//     const favorites = campers.filter(camper =>
//       favoritesId.includes(camper._id)
//     );

//     return favorites;
//   }
// );

export const selectLoading = state => state.campers.loading;

export const selectError = state => state.campers.error;
export const selectPage = state => state.campers.page;
export const selectPerPage = state => state.campers.perPage;
export const selectSortOrder = state => state.campers.sortOrder;
export const selectSortBy = state => state.campers.sortBy;
export const selectTotalItems = state => state.campers.totalItems;
