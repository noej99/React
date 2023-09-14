import React, { useEffect, useRef, useState } from "react";

const HookFourth = () => {
  // jQuery/JS스타일의 DOM객체 선택
  const cv = useRef(); // 사용할때는 변수명.current
  const [pen, setPen] = useState(null);

  useEffect(() => {
    setPen(cv.current.getContext("2d"));
  }, []);

  return (
    <canvas
      ref={cv}
      width={"300px"}
      height={"300px"}
      onClick={(e) => {
        pen.fillRect(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 20, 20);
      }}
    />
  );
};

export default HookFourth;
