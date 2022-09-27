import { combineReducers } from '@reduxjs/toolkit';
import { reducer as initialSlice } from './redux';

const appReducer = combineReducers({
  init: initialSlice
});

export default appReducer;
