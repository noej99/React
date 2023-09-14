import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Fourth = () => {
  // dar
  const [human] = useSearchParams();
  const navi = useNavigate();
  return (
    <>
      <h1>Fourth</h1>
      <h2>{human.get("name")}</h2>
      <h2>{human.get("age")}</h2>
      <Link to="/fifth.go?name=야채김밥&price=4000">Fifth로(야채김밥)</Link>
      <br />
      <button
        onDoubleClick={() => {
          navi("/fifth.go?name=김치찌개&price=6000");
        }}
      >
        Fifth로(김치찌개)
      </button>
      <br />
      <button
        onDoubleClick={() => {
          navi(-1);
        }}
      >
        뒤로
      </button>
    </>
  );
};

export default Fourth;
