import React, { useState } from "react";

const KeyboardEvent = () => {
  const [inputInfo, setInputInfo] = useState({ k: "", v: "" });
  return (
    <div>
      <input
        onKeyUp={(e) => {
          setInputInfo({ k: e.key, v: e.target.value })
        }}
      />
      <h1>{inputInfo.k}</h1>
      <h1>{inputInfo.v}</h1>
    </div>
  );
};

export default KeyboardEvent;
