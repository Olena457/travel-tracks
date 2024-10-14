// _______________________________________________________________________________

// export const fetchCampers = createAsyncThunk(
//   'campers/fetchCampers',
//   async (queryParams, thunkAPI) => {
//     try {
//       // Фільтрація даних на основі queryParams
//       const filteredData = campersData.items.filter(item => {
//         // Додай логіку фільтрації на основі queryParams
//         let match = true;
//         if (queryParams.location) {
//           match = match && item.location.includes(queryParams.location);
//         }
//         if (queryParams.vehicleType) {
//           match = match && item.form === queryParams.vehicleType;
//         }
//         if (queryParams.ac) {
//           match = match && item.AC === true;
//         }
//         if (queryParams.bathroom) {
//           match = match && item.bathroom === true;
//         }
//         if (queryParams.kitchen) {
//           match = match && item.kitchen === true;
//         }
//         if (queryParams.tv) {
//           match = match && item.TV === true;
//         }
//         if (queryParams.automatic) {
//           match = match && item.transmission.toLowerCase() === 'automatic';
//         }
//         return match;
//       });

//       return {
//         items: filteredData.slice(
//           (queryParams.page - 1) * queryParams.perPage,
//           queryParams.page * queryParams.perPage
//         ),
//         total: filteredData.length,
//       };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// ______________________________________________________________

//
// import axios from 'axios';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchCampers = createAsyncThunk(
//   'campers/fetchCampers',
//   async (queryParams, thunkAPI) => {
//     try {
//       const response = await axios.get(
//         `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`,
//         {
//           params: queryParams,
//         }
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import campersData from '../../data/campers.json';
export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (_, thunkAPI) => {
    try {
      return {
        items: campersData.items,
        total: campersData.total,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const campersInitialState = {
  items: [],
  favorites: [],
  page: 1,
  perPage: 4,
  sortOrder: 'asc',
  sortBy: '_id',
  totalItems: 1,
  filter: {},
  loading: false,
  error: null,
};

const isPending = state => {
  state.loading = true;
  state.error = null;
};

const isRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
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
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, isPending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.totalItems = action.payload.total;
      })
      .addCase(fetchCampers.rejected, isRejected);
  },
});

export const campersReducer = campersSlice.reducer;
export const {
  toggleFavorite,
  setPage,
  setPerPage,
  setSortBy,
  setSortOrder,
} = campersSlice.actions;
