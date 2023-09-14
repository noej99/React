import axios from "axios";
import React, { useEffect, useState } from "react";

const Ajax2 = () => {
  const [snack, setSnack] = useState({ name: "", price: "" });
  const regSnack = () => {
    const url = `http://195.168.9.62/snack.reg?name=${snack.name}&price=${snack.price}`;
    axios.get(url).then((res) => {
      alert("등록성공");
      getSnack();
      setSnack({ name: "", price: "" });
    });
  };

  const [snacks, setSnacks] = useState([]);
  const snacksTr = snacks.map((s, i) => (
    <tr>
      <td>{s.name}</td>
      <td>{s.price}</td>
    </tr>
  ));
  const getSnack = () => {
    axios.get("http://195.168.9.62/snack.get").then((res) => {
      setSnacks(res.data.snacks);
    });
  };

  useEffect(() => {
    getSnack();
  }, []);

  return (
    <>
      이름 :{" "}
      <input
        value={snack.name}
        onChange={(e) => {
          setSnack({ ...snack, name: e.target.value });
        }}
      />
      <p />
      가격 :{" "}
      <input
        value={snack.price}
        onChange={(e) => {
          setSnack({ ...snack, price: e.target.value });
        }}
      />
      <p />
      <button onClick={regSnack}>등록</button>
      <hr />
      <table border={1}>{snacksTr}</table>
    </>
  );
};

export default Ajax2;
