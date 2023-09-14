import React, { useState } from "react";

// VirtualDOM
// OOP
//      class를 만들어놓고...
//          멤버변수, 메소드, ...
//      react측에서 함수 기반 권장
//          멤버변수?, 메소드?
//          => hook : class같은 기능들을 할 수 있도록
//              useXXX
const HookFirst = () => {
  // 멤버변수 기능
  // const [멤버변수, setter] = useState(기본값);
  const [cnt, setCnt] = useState(0);
  return (
    <button
      onClick={() => {
        setCnt(cnt + 1);
      }}
    >
      {cnt}
    </button>
  );
};

export default HookFirst;
