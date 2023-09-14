import React, { useState } from "react";

const Today = () => {
  const [product, setProduct] = useState({ name: "", price: "" });
  const updateProduct = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const [products, setProducts] = useState([]);
  const productsTr = products.map((p, i) => (
    <tr>
      <td
        onClick={() => {
          del(p.name);
        }}
      >
        {p.name}
      </td>
      <td>{p.price}</td>
    </tr>
  ));

  const reg = () => {
    const newProducts = products.concat(product);
    setProducts(newProducts);
    setProduct({ name: "", price: "" });
  };

  const del = (n) => {
    const newProducts = products.filter((p) => p.name !== n);
    setProducts(newProducts);
  };
  return (
    <>
      이름 : <input name="name" value={product.name} onChange={updateProduct} />
      <p />
      가격 :{" "}
      <input name="price" value={product.price} onChange={updateProduct} />
      <p />
      <button onClick={reg}>등록</button>
      <hr />
      <table border={1}>{productsTr}</table>
    </>
  );
};

export default Today;
