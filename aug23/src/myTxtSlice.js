import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  txt: "aug23",
};

const MyTxtSlice = createSlice({
  name: "mts",
  initialState,
  reducers: {
    changeTxt: (s, a) => {
      s.txt = a.payload;
    },
  },
});

export const { changeTxt } = MyTxtSlice.actions;

export default MyTxtSlice.reducer;
