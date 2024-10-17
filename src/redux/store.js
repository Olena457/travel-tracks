import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { campersReducer } from './campers/campersSlice.js';
import { filtersReducer } from './filters/filtersSlice.js';
import { thunk } from 'redux-thunk';

const campersPersistConfig = {
  key: 'campers',
  storage,
  whitelist: ['favorites'],
};

const rootReducer = {
  campers: persistReducer(campersPersistConfig, campersReducer),
  filters: filtersReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk),
});

export const persistor = persistStore(store);
