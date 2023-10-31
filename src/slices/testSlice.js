import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
    name: "test",
    initialState: {

    },
    reducers: {
        getPosts: () => { },
    }
})

export const { getPosts } = testSlice.actions;
export default testSlice.reducer;