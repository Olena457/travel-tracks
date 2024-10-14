import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  vehicleType: '',
  equipment: {
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    toggleEquipment: (state, action) => {
      state.equipment[action.payload] = !state.equipment[action.payload];
    },
    toggleAC: state => {
      state.equipment.ac = !state.equipment.ac;
    },
    toggleTransmission: state => {
      state.equipment.automatic = !state.equipment.automatic;
    },
    toggleKitchen: state => {
      state.equipment.kitchen = !state.equipment.kitchen;
    },
    toggleTV: state => {
      state.equipment.tv = !state.equipment.tv;
    },
    toggleBathroom: state => {
      state.equipment.bathroom = !state.equipment.bathroom;
    },
  },
});

export const {
  setLocation,
  setVehicleType,
  toggleEquipment,
  toggleAC,
  toggleTransmission,
  toggleKitchen,
  toggleTV,
  toggleBathroom,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
