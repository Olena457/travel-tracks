// import { createSlice } from '@reduxjs/toolkit';

// import { fetchAll } from './operations';
// import { toast } from 'react-hot-toast';

// const camperSlice = createSlice({
//   name: 'campers',
//   initialState: {
//     items: [],
//     page: 1,
//     total: 1,
//     filters: {
//       location: '',
//       equipment: [],
//       form: '',
//     },
//     locations: [],
//     error: false,
//     loading: false,
//   },
//   reducers: {
//     clearItems: {
//       reducer(state) {
//         state.items = [];
//       },
//     },
//     changeFilter: {
//       reducer(state, action) {
//         state.filters = action.payload;
//       },
//     },
//     changePage: {
//       reducer(state, action) {
//         state.page = action.payload;
//       },
//     },
//     changeTotal: {
//       reducer(state, action) {
//         state.total = action.payload;
//       },
//     },
//     changeError: {
//       reducer(state, action) {
//         state.error = action.payload;
//       },
//     },
//     changeLoading: {
//       reducer(state, action) {
//         state.loading = action.payload;
//       },
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchAll.pending, (state, action) => {
//         state.loading = true;
//       })
//       .addCase(fetchAll.fulfilled, (state, action) => {
//         state.error = false;
//         state.loading = false;
//         const page = state.page;
//         if (page !== 1) {
//           state.items = [...state.items, ...action.payload.items];
//         } else {
//           state.items = action.payload.items;
//         }
//         state.total = action.payload.total;
//       })
//       .addCase(fetchAll.rejected, (state, action) => {
//         // state.items = []
//         state.loading = false;
//         state.error = true;
//         toast('Something is wrong, try again', {
//           style: { backgroundColor: 'red' },
//         });
//       });
//   },
// });

// export const {
//   changeError,
//   changeFilter,
//   changeLoading,
//   changePage,
//   changeTotal,
//   changeFavorite,
//   deleteFavorite,
//   clearItems,
// } = camperSlice.actions;
// export const camperReducer = camperSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { fetchAll, fetchCamperById, deleteFavoriteById } from './operations';
import { toast } from 'react-hot-toast';

const camperSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    page: 1,
    total: 1,
    filters: {
      location: '',
      equipment: [],
      form: '',
    },
    locations: [],
    error: false,
    loading: false,
  },
  reducers: {
    clearItems(state) {
      state.items = [];
    },
    changeFilter(state, action) {
      state.filters = action.payload;
    },
    changePage(state, action) {
      state.page = action.payload;
    },
    changeTotal(state, action) {
      state.total = action.payload;
    },
    changeError(state, action) {
      state.error = action.payload;
    },
    changeLoading(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAll.pending, state => {
        state.loading = true;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        const page = state.page;
        if (page !== 1) {
          state.items = [...state.items, ...action.payload.items];
        } else {
          state.items = action.payload.items;
        }
        state.total = action.payload.total;
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        toast('Something is wrong, try again', {
          style: { backgroundColor: 'red' },
        });
      })
      .addCase(fetchCamperById.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        toast('Failed to fetch camper by ID', {
          style: { backgroundColor: 'red' },
        });
      })
      .addCase(deleteFavoriteById.fulfilled, (state, action) => {
        const vehicleId = action.payload;
        state.favorite = state.favorite.filter(
          vehicle => vehicle.id !== vehicleId
        );
      })
      .addCase(deleteFavoriteById.rejected, (state, action) => {
        toast(action.payload || 'Failed to delete favorite', {
          style: { backgroundColor: 'red' },
        });
      });
  },
});
export const {
  changeError,
  changeFilter,
  changeLoading,
  changePage,
  changeTotal,
  deleteFavoriteById,
} = camperSlice.actions;

export const camperReducer = camperSlice.reducer;
