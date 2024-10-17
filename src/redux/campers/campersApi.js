// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { campApi } from '../../api/axiosBaseQuery.js';

// export const fetchCampers = createAsyncThunk(
//   'campers/fetchCampers',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await campApi.get('/');
//       return data;
//     } catch (error) {
//       console.error('Error fetching campers:', error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchCamperById = createAsyncThunk(
//   'campers/fetchCamperById',
//   async (camperId, thunkAPI) => {
//     try {
//       const { responce } = await campApi.get(`/${camperId}`);
//       return responce.data;
//     } catch (error) {
//       console.error('Error fetching camper:', error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteCamperById = createAsyncThunk(
//   'campers/deleteCamperById',
//   async (camperId, thunkAPI) => {
//     try {
//       const response = await campApi.delete(`/${camperId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Error deleting camper:', error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${baseUrl}`);
      return data;
    } catch (error) {
      console.error('Error fetching campers:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/${camperId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching camper:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCamperById = createAsyncThunk(
  'campers/deleteCamperById',
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.delete(`${baseUrl}/${camperId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting camper:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
