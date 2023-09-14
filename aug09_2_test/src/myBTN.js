import React, { useState } from "react";

const MyBTN = () => {
  // 각 객체들은 state(멤버변수)가 있음
  // dar
  // const [getter, setter] = useState(기본값);
  const [cnt, setCnt] = useState(0); // cnt에 0저장됨, setter만들어짐
  
  // nfn
  const incrCntHaha = () => {
    setCnt(cnt + 1);
  };

  return (
    <table border={1}>
      <tr>
        <td>
          <h2>{cnt}</h2>
        </td>
      </tr>
      <tr>
        <td>
          <button onClick={incrCntHaha}>버튼</button>
        </td>
      </tr>
    </table>
  );
};

export default MyBTN;
