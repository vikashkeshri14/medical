import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../features/language/language";
import cartReducer from "../features/cart/cart";
export default configureStore({
  reducer: {
    language: languageReducer,
    cart: cartReducer,
  },
});
