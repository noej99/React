import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLogined } from "../mp";

// yarn add @reduxjs/toolkit react-redux
const Login = () => {
  const navi = useNavigate();
  const [member, setMember] = useState({ id: "", pw: "" });
  const fd = new FormData();
  fd.append("id", member.id);
  fd.append("pw", member.pw);
  const login = () => {
    axios.post(`http://localhost/member.login`, fd).then((res) => {
      sessionStorage.setItem("loginToken", res.data.token);
      isLogined();
    });
    setMember({ id: "", pw: "" });
  };
  return (
    <table id="loginTable">
      <tr>
        <td align="right">
          <input
            value={member.id}
            onChange={(e) => {
              setMember({ ...member, id: e.target.value });
            }}
            placeholder="ID"
            maxLength={10}
          />
          <input
            value={member.pw}
            onChange={(e) => {
              setMember({ ...member, pw: e.target.value });
            }}
            placeholder="PW"
            type="password"
            maxLength={10}
          />
          <button onClick={login}>로그인</button>
          <button
            onClick={() => {
              navi("/join.go");
            }}
          >
            회원가입
          </button>
        </td>
      </tr>
    </table>
  );
};

export default Login;
