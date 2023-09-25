import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../src/features/productsSlice'

export const store = configureStore({
    reducer: {
        products: productReducer
    }
})