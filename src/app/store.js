import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../features/language/language";
export default configureStore({
  reducer: {
    language: languageReducer,
  },
});
