import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        items: [],
        error: null,
        isLoading: false
    },
    reducers: {
        getPosts: (state, action) => {
            state.items = action.payload
        }
    }
})

export const { getPosts } = postsSlice.actions;
export default postsSlice.reducer;