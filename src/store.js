import { configureStore } from "@reduxjs/toolkit";
import crudSlice from "./crudSlice";

const store = configureStore({
    reducer: {
        crudTest: crudSlice,
    }
});

export default store;
