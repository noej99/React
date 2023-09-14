import React from "react";
import { useSelector } from "react-redux";

// subscriber : 상태를 활용하는
const MyH1 = () => {
  // (상태) => 상태.store쪽 이름.slice쪽 속성명
  const ssize = useSelector((stateE) => stateE.mss.sizekeke);
  return <h1 style={{fontSize: ssize + "pt" }}>ㅋㅋㅋ</h1>;
};

export default MyH1;
