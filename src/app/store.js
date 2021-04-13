import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/mailSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
