import {configureStore} from '@reduxjs/toolkit';
import postReducer from './PostSlice.js';
import userReducer from './userSlice.js';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    user: userReducer,
  },
});
