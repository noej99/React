import React from "react";
import { Link, useParams } from "react-router-dom";

const Third = () => {
  const snack = useParams();
  return (
    <>
      <h1>Third</h1>
      <h2>{snack.n}</h2>
      <h2>{snack.p}</h2>
      <Link to="/fourth.go?name=홍길동&age=20">Fourth로(홍길동)</Link>
      <br />
      <Link to="/fourth.go?name=김길동&age=20">Fourth로(김길동)</Link>
    </>
  );
};

export default Third;
