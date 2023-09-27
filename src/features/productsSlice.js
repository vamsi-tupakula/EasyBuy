import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesList: null,
  products: null,
  userId: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateCategories: (state, action) => {
      return { ...state, categoriesList: action.payload };
    },
    updateProducts: (state, action) => {
      return { ...state, products: action.payload };
    },
    updateUserDetails: (state, action) => {
      return { ...state, userId: action.payload };
    },
  },
});

export const { updateCategories, updateProducts, updateUserDetails } =
  productsSlice.actions;
export default productsSlice.reducer;
