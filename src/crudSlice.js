import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
    name: "crud",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        editItem: (state, action) => {
            const { id, name } = action.payload;
            const item = state.items.find((item) => item.id === id);
            if (item) {
                item.name = name;
            }
        },
        deleteItem: (state, action) => {
            return state.items.filter((item) => item.id !== action.payload);
        }
    }
});

export const { addItem, editItem, deleteItem } = crudSlice.actions;
export default crudSlice.reducer;
