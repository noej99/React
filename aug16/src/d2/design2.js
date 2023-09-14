import React from "react";
import d22 from "./d2.module.css"; // import 이름 from "파일명";

// OOP -> 일반 웹개발보다 -> 파일이 많아지고
// id/class도 많이 쓰게 되겠고...

// ??.css -> 전체에 다 적용
// ??.module.css -> 이름.class명으로 사용

// ES6
//      문자열 : '' or ""
//      문자열 처리할 때 : ``(backtick - ~밑에 있는)
//      let t = `
//          여러 줄
//          처리가능
//      `;
//      let t2 = `ㅋㅋ${변수명}ㅋ`;
//      alert(`ㅋㅋㅋ${a}ㅎㅎ`);

const Design2 = () => {
  return (
    <>
      <div className="a">ㄱㄱ</div>
      <div className={d22.b}>ㄴㄴ</div>
      <div className="b">ㄷㄷ</div>
      <h1 className={`${d22.b} ${d22.b2}`}>ㄹㄹ</h1>
    </>
  );
};

export default Design2;
