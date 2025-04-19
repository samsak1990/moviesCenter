import { configureStore } from '@reduxjs/toolkit';

import currentQueryReduser from '../features/currentQuerySlice';
import { kinopoiskApi } from '../services/kinopoiskAPI';

export const store = configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    currentQuerySlice: currentQueryReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
});
