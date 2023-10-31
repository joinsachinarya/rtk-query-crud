import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {

    },
    reducers: {
        geAllUsers: () => { },
    }
})

export const { geAllUsers } = usersSlice.actions;
export default usersSlice.reducer;