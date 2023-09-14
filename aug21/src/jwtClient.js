import axios from "axios";
import React, { useState } from "react";

const JWTClient = () => {
  const [human, setHuman] = useState({ name: "", age: "" });
  const save = () => {
    axios
      .get(`http://localhost/student.save?name=${human.name}&age=${human.age}`)
      .then((res) => {
        // 브라우저 닫을때까지 살아있는
        sessionStorage.setItem("st", res.data.token);
      });
    setHuman({ name: "", age: "" });
  };

  const print = () => {
    axios
      .get(`http://localhost/student.get?token=${sessionStorage.getItem("st")}`)
      .then((res) => {
        alert(JSON.stringify(res.data));
      });
  };
  return (
    <div>
      이름 :{" "}
      <input
        value={human.name}
        onChange={(e) => {
          setHuman({ ...human, name: e.target.value });
        }}
      />
      <p />
      나이 :{" "}
      <input
        value={human.age}
        onChange={(e) => {
          setHuman({ ...human, age: e.target.value });
        }}
      />
      <p />
      <button onClick={save}>저장</button>
      <p />
      <button onClick={print}>출력</button>
    </div>
  );
};

export default JWTClient;