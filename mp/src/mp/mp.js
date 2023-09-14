import React, { useEffect } from "react";
import Title from "./title/title";
import Content from "./content";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoginMember } from "./member/loginSlice";
import { useNavigate } from "react-router-dom";

// 어디서든 이 함수를 사용할 수 있게 export
let d = null;
let n = null;
export const isLogined = () => {
  axios
    .get(
      `http://localhost/member.info.get?token=${sessionStorage.getItem(
        "loginToken"
      )}`
    )
    .then((res2) => {
      d(setLoginMember(res2.data));
      if (res2.data.id === undefined || res2.data.id === "") {
        n("/");
      } else {
        axios
          .get(
            `http://localhost/member.token.update?token=${sessionStorage.getItem(
              "loginToken"
            )}`
          )
          .then((res3) => {
            // 세션시간이내에 활동하면 토큰 갱신
            sessionStorage.setItem("loginToken", res3.data.token);
          });
      }
    });
};

const MP = () => {
  d = useDispatch(); // react component속에 있어야
  n = useNavigate();
  useEffect(() => {
    document.addEventListener("click", isLogined);

    return () => {
      document.removeEventListener("click", isLogined);
    };
  }, []);

  return (
    <>
      <Title />
      <Content />
    </>
  );
};

export default MP;
