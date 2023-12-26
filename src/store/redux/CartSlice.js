import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addIncart: (state, action) => {
      state.push(action.payload);
    },
    removeFromcart: (state, action) => {
      return {
        ...state,
        cart: state.filter((item, index) => index !== action.payload),
      };
    },
  },
});
export const { addIncart, removeFromcart } = cartSlice.actions;
export default cartSlice.reducer;
