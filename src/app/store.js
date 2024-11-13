import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todosSlice';
import postsReducer from './slices/postsSlice';

export const store = configureStore({
  reducer: {
    // Add reducers here
    todos: todosReducer,  
    posts: postsReducer
  },
});