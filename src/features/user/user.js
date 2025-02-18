import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("loginInfo")
    ? JSON.parse(localStorage.getItem("loginInfo"))
    : {},
};

const userSlice = createSlice({
  name: "loginInfo",
  initialState,
  reducers: {
    LoginInfo: (state, action) => {
      //console.log("action", action.payload);
      state.items = action.payload;

      localStorage.setItem("loginInfo", JSON.stringify(state.items));
    },
    LogoutInfo: (state, action) => {
      state.items = [];
      localStorage.removeItem("loginInfo");
    },
  },
});
// Action creators are generated for each case reducer function
export const { LoginInfo, LogoutInfo } = userSlice.actions;

export default userSlice.reducer;
