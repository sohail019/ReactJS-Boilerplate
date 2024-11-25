import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme-slice';
import filterReducer from './slices/filter-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    filter: filterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
