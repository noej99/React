import React from "react";
import "./d6.scss";
import d63 from "./d63.module.scss";

// css -> sass(syntatically awesome style sheet) -> scss(sass한 css)
// yarn add sass
// Beautify css/sass/scss/less add-on설치
const Design6 = () => {
  return (
    <>
      <button className={d63.f}>버튼</button>
      <div className="e">111</div>
      <div className="e2">222</div>
      <button className="e3">333</button>
      <button className="e4">444</button>
      <div className="e5">
        555
        <div>555-2</div>
      </div>
    </>
  );
};

export default Design6;
