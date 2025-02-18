import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../features/language/language";
import cartReducer from "../features/cart/cart";
import useReducer from "../features/user/user";
export default configureStore({
  reducer: {
    language: languageReducer,
    cart: cartReducer,
    user: useReducer,
  },
});
