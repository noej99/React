import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Second = () => {
  const show = () => {
    axios
      .get(`http://localhost/student.get?token=${sessionStorage.getItem("myToken")}`)
      .then((res) => {
        alert(JSON.stringify(res.data));
      });
  };
  const del = () => {
    sessionStorage.removeItem("myToken");
  };
  const update = () => {
    axios
      .get(`http://localhost/student.update?token=${sessionStorage.getItem("myToken")}`)
      .then((res) => {
        alert(JSON.stringify(res.data));
        if (res.data.token === "없음") {
          sessionStorage.removeItem("myToken");
        } else {
          sessionStorage.setItem("myToken", res.data.token);
        }
      });
  };
  return (
    <>
      <h1>Second</h1>
      <hr />
      <button onClick={show}>확인</button>
      <br />
      <button onClick={del}>토큰 삭제</button>
      <br />
      <button onClick={update}>토큰 갱신</button>
      <hr />
      <Link to="/third.go/새우깡/2000">Third로(새우깡)</Link>
      <br />
      <Link to="/third.go/양파링/4000">Third로(양파링)</Link>
    </>
  );
};

export default Second;
