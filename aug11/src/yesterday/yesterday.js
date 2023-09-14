import React, { useState } from "react";

//jQuery/JavaScript
//      button을 눌렀을때
//      input에 적혀있는 값 가져와서

//react
//      변화하는 것들을 state에 실시간 반영
//      button은 눌렀을때
//      state를....

//  JS/jQuery:keyup
//  react:change

const Yesterday = () => {
  //     이름이라는 state           초기값
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const productsTr = products.map((p, i) => (
    <tr>
      <td onClick={() => { del(p.n); }}>{p.n}</td>
      <td>{p.p}</td>
    </tr>
  ));

  //anfn:이름 없는 화살표 함수
  //nfn:  이름 있는 화살표 함수
  const reg = () => {
    const p = { n: name, p: price };
    const newProducts = products.concat(p); //concat:기존에 p추가해서 새로운 배열
    setProducts(newProducts); // 새로 만들어진 배열을 products에
    setName("");
    setPrice("");
  };

  const del = (n) => {
    const newProducts = products.filter((p) => p.n !== n);
    setProducts(newProducts);
  };

  return (
    //anfn 화살표함수
    <>
      이름:{""}
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <p></p>
      가격:{""}
      <input
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>
      <p />
      <button onClick={reg}>등록</button>
      <hr />
      <table border={1}>{productsTr}</table>
    </>
  );
};

export default Yesterday;
