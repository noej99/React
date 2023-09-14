import axios from "axios";
import React, { useState } from "react";

// axios : AJAX라이브러리
// yarn add axios

// 비동기식을 동기식으로 하고싶을때 async와 await를 사용
const Ajax1 = () => {
  const [w, setW] = useState({ desc: "", temp: "", humi: "" });
  const getWeather = /*async*/ () => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=baff8f3c6cbc28a4024e336599de28c4&units=metric&lang=kr";
    /*await*/ axios.get(url).then((res) => {
      setW({
        desc: res.data.weather[0].description,
        temp: res.data.main.temp,
        humi: res.data.main.humidity,
      });
    });
  };

  return (
    <>
      <h1>날씨 : {w.desc} </h1>
      <h1>기온 : {w.temp}</h1>
      <h1>습도 : {w.humi}</h1>
      <button onClick={getWeather}>확인</button>
    </>
  );
};

export default Ajax1;
