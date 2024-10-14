import { createSelector } from '@reduxjs/toolkit';
import { selectFavoritesList } from '../campers/campersSelectors.js';

export const selectLocation = state => state.filters.location;

export const selectAC = state => state.filters.isAC;

export const selectAutomatic = state => state.filters.isAutomatic;

export const selectKitchen = state => state.filters.isKitchen;

export const selectTV = state => state.filters.isTV;

export const selectBathroom = state => state.filters.isBathroom;

export const selectVehicleType = state => state.filters.vehicleType;

export const selectFilteredFavCampers = createSelector(
  [
    selectFavoritesList,
    selectLocation,
    selectVehicleType,
    selectAC,
    selectBathroom,
    selectTV,
    selectKitchen,
    selectAutomatic,
  ],
  (
    campers,
    valueFilter,
    vehicleType,
    isAC,
    isBathroom,
    isTV,
    isKitchen,
    isAutomatic
  ) => {
    const visibleCampers = campers.filter(
      ({
        location,
        form,
        transmission,
        details: { airConditioner, bathroom, TV, kitchen },
      }) => {
        let result =
          location.toLowerCase().includes(valueFilter.trim().toLowerCase()) &&
          form === vehicleType;
        if (isAC) {
          result = result && airConditioner > 0;
        }

        if (isTV) {
          result = result && TV > 0;
        }

        if (isKitchen) {
          result = result && kitchen > 0;
        }

        if (isAutomatic) {
          result = result && transmission.toLowerCase() == 'automatic';
        }

        if (isBathroom) {
          result = result && bathroom > 0;
        }
        return result;
      }
    );

    return visibleCampers;
  }
);
