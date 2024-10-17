// import { createApi } from '@reduxjs/toolkit/query/react';
// import axiosBaseQuery from '../../api/axiosBaseQuery.js';

// export const campersApi = createApi({
//   reducerPath: 'campersApi',
//   baseQuery: axiosBaseQuery({
//     baseUrl: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/', // Базовий URL
//   }),
//   endpoints: builder => ({
//     getCampers: builder.query({
//       query: ({ page = 1, perPage = 7 }) => ({
//         // Без зайвих параметрів
//         url: 'campers',
//         method: 'get',
//         params: { page, perPage },
//       }),
//       transformResponse: response => ({
//         items: response,
//         total: response.length,
//       }),
//     }),
//     getCamperById: builder.query({
//       query: id => ({
//         url: `campers/${id}`,
//         method: 'get',
//       }),
//     }),
//     deleteCamperById: builder.mutation({
//       query: id => ({
//         url: `campers/${id}`,
//         method: 'delete',
//       }),
//     }),
//   }),
// });

// export const {
//   useGetCampersQuery,
//   useGetCamperByIdQuery,
//   useDeleteCamperByIdMutation,
// } = campersApi;
// import { createApi } from '@reduxjs/toolkit/query/react';
// import axiosBaseQuery from '../../api/axiosBaseQuery.js';

// export const campersApi = createApi({
//   reducerPath: 'campersApi',
//   baseQuery: axiosBaseQuery({
//     baseUrl: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/', // Базовий URL без 'campers'
//   }),
//   endpoints: builder => ({
//     getCampers: builder.query({
//       query: () => ({
//         url: 'campers',
//         method: 'get',
//       }),
//       transformResponse: response => ({
//         items: response,
//         total: response.length,
//       }),
//     }),
//     getCamperById: builder.query({
//       query: id => ({
//         url: `campers/${id}`,
//         method: 'get',
//       }),
//     }),
//     deleteCamperById: builder.mutation({
//       query: id => ({
//         url: `campers/${id}`,
//         method: 'delete',
//       }),
//     }),
//   }),
// });

// export const {
//   useGetCampersQuery,
//   useGetCamperByIdQuery,
//   useDeleteCamperById,
// } = campersApi;
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
//       const response = await campApi.get(`/${camperId}`);
//       return response.data;
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
import { campApi } from '../../api/axiosBaseQuery.js';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (_, thunkAPI) => {
    try {
      const { data } = await campApi.get('/');
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
      const { responce } = await campApi.get(`/${camperId}`);
      return responce.data;
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
      const response = await campApi.delete(`/${camperId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting camper:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
