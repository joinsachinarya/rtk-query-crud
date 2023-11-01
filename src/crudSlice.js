import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
    name: "crud",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            console.log(action, state);
            state.items.push(action.payload);
        },
        editItem: (state, action) => {
            const { id, itemName } = action.payload;
            console.log(action, state);
            const item = state.items.find((item) => item.id === id);
            if (item) {
                item.itemName = itemName;
            }
        },
        deleteItem: (state, action) => {
            console.log(action, state);
            state.items = state.items.filter((item) => item.id !== action.payload);
        }
    }
});

export const { addItem, editItem, deleteItem } = crudSlice.actions;
export default crudSlice.reducer;
