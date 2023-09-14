import React from "react";

// JSX
//      기본적으로는 html비슷
//      DOM객체 하나여야
//      종료태그가 반드시
//      낙타체

// props
//      DOM객체 속성들이 JS객체 형태로

// alt + shift + f
const PropsFirst = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.price}</h1>
    </>
  );
};

export default PropsFirst;
