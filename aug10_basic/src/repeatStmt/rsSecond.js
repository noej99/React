import React, { useState } from "react";
// () => {
//      return 어쩌고;
// }
//      ||
//      \/
// () => 어쩌고;

const RsSecond = () => {
  const [data, setData] = useState(["ㄱㄱㄱ", "ㄴㄴㄴ", "ㄷㄷㄷ"]);
  // jQuery의 $.each기능 + 값 리턴받아서 배열로 만들어주기도
  const trs = data.map((v, i) => (
    <tr>
      <td>{v}</td>
    </tr>
  ));

  return <table border={1}>{trs}</table>;
};

export default RsSecond;
