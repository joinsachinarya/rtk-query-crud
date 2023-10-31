import { configureStore } from "@reduxjs/toolkit";
import testSlice from "../slices/testSlice";

const store = configureStore({
    reducer: {
        test: testSlice,
    }
})
export default store;