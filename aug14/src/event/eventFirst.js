import React, { useEffect, useState } from "react";

// document
// window

// jQuery
//      객체 크기 : $(window).width()/$(window).height()
//      이벤트 연결 : $(선택자).이벤트(콜백함수);

// JavaScript
//      객체 크기 : window.innerWidth/window.innerHeight
//      이벤트 연결 : 변수.addEventListener("이벤트", 콜백함수);

const EventFirst = () => {
  const [size, setSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });

  const changeSize = () => {
    setSize({ w: window.innerWidth, h: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", changeSize);

    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);

  return (
    <div>
      <h1>{size.w}</h1>
      <h1>{size.h}</h1>
    </div>
  );
};

export default EventFirst;
