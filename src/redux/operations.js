import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosGetAll from '../api/axiosGetAll.js';

export const fetchAll = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const data = {
        page: state.campers.page,
        form: state.campers.filters.form,
        location: state.campers.filters.location,
        equipment: state.campers.filters.equipment,
      };
      const response = await axiosGetAll(data);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
// import axiosGetOne from '../api/axiosGetOne.js'

// export const fetchCamperById = createAsyncThunk(
//   'campers/fetchCamperById',
//   async (camperId, thunkAPI) => {
//     try {
//       const response = await axiosGetOne(camperId);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const resetCampers = createAsyncThunk(
//   'campers/resetCampers',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axiosGetOne();
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
