import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme-slice';
import filterReducer from './slices/filter-slice';
import tabReducer from './slices/tab-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    filter: filterReducer,
    tab: tabReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
