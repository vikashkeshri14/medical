import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { drugId, name, name_ar, img, price, quantity } = action.payload;

      const productIndex = state.items.findIndex(
        (item) => item.drugId === drugId
      );

      if (productIndex >= 0) {
        state.items[productIndex].quantity += quantity;
      } else {
        state.items.push({ drugId, name, name_ar, img, quantity });
      }
    },
  },
});
// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
