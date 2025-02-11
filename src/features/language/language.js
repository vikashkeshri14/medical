import { createSlice } from "@reduxjs/toolkit";

import en from "../../locales/en/en.json";
import ar from "../../locales/ar/ar.json";
export const language = createSlice({
  name: "language",
  initialState: {
    value:
      localStorage.getItem("lang") == "en" || !localStorage.getItem("lang")
        ? "en"
        : "ar",
    langd:
      localStorage.getItem("lang") == "en" || !localStorage.getItem("lang")
        ? en
        : ar,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.value = action.payload;
      state.langd = action.payload == "en" ? en : ar;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLanguage } = language.actions;

export default language.reducer;
