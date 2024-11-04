import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  reducers: {
    setTodos: (state, action) => {
      state.items = action.payload
    },
    addTodo: (state, action) => {
      state.items.push(action.payload)
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
});

export const { setTodos, addTodo, setLoading, setError } = todosSlice.actions;
export default todosSlice.reducer;