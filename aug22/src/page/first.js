import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const First = () => {
  const [student, setStudent] = useState({ name: "", age: "" });
  const make = () => {
    axios
      .get(
        `http://localhost/student.save?name=${student.name}&age=${student.age}`
      )
      .then((res) => {
        sessionStorage.setItem("myToken", res.data.token);
        setStudent({ name: "", age: "" });
      });
  };
  return (
    <>
      <h1>First</h1>
      <hr />
      이름 :{" "}
      <input
        value={student.name}
        onChange={(e) => {
          setStudent({ ...student, name: e.target.value });
        }}
      />
      <p />
      나이 :{" "}
      <input
        value={student.age}
        onChange={(e) => {
          setStudent({ ...student, age: e.target.value });
        }}
      />
      <p />
      <button onClick={make}>토큰만들기</button>
      <hr />
      <a href="/second.go">Second로</a>
      <br />
      <Link to="/second.go">Second로</Link>
    </>
  );
};

export default First;
