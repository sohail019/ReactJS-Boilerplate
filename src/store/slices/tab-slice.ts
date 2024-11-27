import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TabState {
  activeTab: number;
}

const initialState: TabState = {
  activeTab: 0, 
};

// Create the slice
const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<number>) {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = tabSlice.actions;

export default tabSlice.reducer;
