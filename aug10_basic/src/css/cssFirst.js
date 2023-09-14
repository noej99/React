import React from "react";
// CSS는 JS객체형태로
const CssFirst = () => {
  const c = { backgroundColor: "black", color: "yellow" };
  return <h1 style={c}>CssFirst</h1>;
};

export default CssFirst;
