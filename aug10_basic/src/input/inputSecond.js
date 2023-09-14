import React, { useState } from "react";

const InputSecond = () => {
  // InputSecond라는 객체의 상태
  const [c, setC] = useState("black");
  const [h2Css, setH2Css] = useState({
    backgroundColor: "yellow",
    color: "black",
    fontSize: "50pt",
  });
  return (
    <div>
      <input
        value={c}
        onChange={(e) => {
          setC(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          // ...객체 : 그(배경색, 글자색, 폰트사이즈) 객체 그대로 불러오기
          setH2Css({ ...h2Css, color: c });
        }}
      >
        change
      </button>
      <h2 style={h2Css}>ㅎㅎㅎ</h2>
    </div>
  );
};

export default InputSecond;
