import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(localStorage.getItem("cart"));
      const { drugId, name, name_ar, img, price, quantity } = action.payload;

      const productIndex = state.items.findIndex(
        (item) => item.drugId === drugId
      );

      if (productIndex >= 0) {
        state.items[productIndex].quantity += quantity;
      } else {
        state.items.push({ drugId, name, name_ar, img, price, quantity });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeCartById: (state, action) => {
      let val = state.items.filter((data) => data.drugId != action.payload);
      state.items = val;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCarts: (state, action) => {
      let val = [];
      state.items = val;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateCart: (state, action) => {
      const { drugId, quantity } = action.payload;
      let val = state.items.filter((data, i) => {
        if (data.drugId == drugId) {
          data.quantity = quantity;
        }
        return data;
      });
      //console.log(val);
      state.items = val;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});
// Action creators are generated for each case reducer function
export const { addToCart, removeCartById, updateCart, clearCarts } =
  cartSlice.actions;

export default cartSlice.reducer;
