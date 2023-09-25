import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoriesList: null,
    products: null
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        updateCategories: (state, action) => {
            return {...state, categoriesList: action.payload};
        },
        updateProducts: (state, action) => {
            return {...state, products: action.payload};
        }
    }
})

export const {updateCategories, updateProducts} = productsSlice.actions;
export default productsSlice.reducer;