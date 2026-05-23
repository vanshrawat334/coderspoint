import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './coursesSlice';
import blogReducer from './blogSlice';
import chatReducer from './chatSlice';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    blog: blogReducer,
    chat: chatReducer,
  },
});
