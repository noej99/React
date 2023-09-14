import React from "react";
import classNames from "classnames/bind";
import "./d3.css";
import d32 from "./d32.module.css";

// yarn add classnames
const Design3 = () => {
  const d322 = classNames.bind(d32);

  return (
    <>
      <h2 className={classNames("c1")}>aaa</h2>
      <h2 className={classNames("c1", "c2")}>bbb</h2>
      <h2 className={classNames("c1", { c3: false })}>ccc</h2>
      <h2 className={classNames({ c1: false }, { c2: true })}>ddd</h2>
      <h2 className={d322("d1")}>eee</h2>
      <h2 className={d322("d1", "d2")}>fff</h2>
    </>
  );
};

export default Design3;
