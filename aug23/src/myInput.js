import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTxt } from "./myTxtSlice";

const MyInput = () => {
  const d = useDispatch();
  const txtt = useSelector((state) => state.mts.txt);
  return (
    <input
      value={txtt}
      onChange={(e) => {
        d(changeTxt(e.target.value));
      }}
    />
  );
};

export default MyInput;
