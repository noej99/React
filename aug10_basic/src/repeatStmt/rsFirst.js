import React from "react";

const RsFirst = () => {
  return (
    <button
      onClick={() => {
        // JavaScript : 자료형 알아서 처리하는 고급언어
        alert(1 == 1); // true
        alert("1" == 1); // true
        alert("1" === 1); // ES6에 추가된 자료형까지 따지는 ==

        const ar = [1234, 123, 12, 1, 0];
        // 값 필터링해서 새로운 배열 생성
        // 배열.filter((값) => 조건식);
        const ar2 = ar.filter((v) => v % 2 !== 0 );
        
        // for + for-each
        // 배열.map((값, 인덱스) => ...)
        ar2.map((v, i) => { 
            alert(v);
            alert(i);
         });
      }}
    >
      click
    </button>
  );
};

export default RsFirst;
