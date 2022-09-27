import { createSlice } from '@reduxjs/toolkit';

const initialClice = createSlice({
  name: 'doodle-jump',
  initialState: {
    mainErrors: null
  },
  reducers: {
    // показ ошибки
    setMainErrors: (state, action) => {
      state.mainErrors = action.payload;
    }
  }
});

export const { reducer, actions } = initialClice;
