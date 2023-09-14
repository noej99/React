import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginMember: {},
};

const loginSlice = createSlice({
  name: "ls",
  initialState,
  reducers: {
    setLoginMember: (s, a) => {
      // 비동기식 통신 불가
      s.loginMember = a.payload;
    },
  },
});

export const { setLoginMember } = loginSlice.actions;

export default loginSlice.reducer;
