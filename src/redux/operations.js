import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosGetAll from '../api/axiosGetAll.js';
import axiosGetOne from '../api/axiosGetOne.js';
import axios from 'axios';

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
export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async (camperId, thunkAPI) => {
    try {
      const response = await axiosGetOne(camperId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavoriteById = createAsyncThunk(
  'campers/deleteCampers',
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.delete(`/favorites/${camperId}`);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
