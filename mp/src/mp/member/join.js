import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const navi = useNavigate();
  const [member, setMember] = useState({
    id: "",
    pw: "",
    pwChk: "",
    name: "",
  });
  const changeMemberInfo = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const fd = new FormData();
  fd.append("id", member.id);
  fd.append("pw", member.pw);
  fd.append("name", member.name);

  const join = () => {
    if (member.pw === member.pwChk) {
      axios.post(`http://localhost/member.join`, fd).then((res) => {
        if (res.data.id !== undefined) {
          alert("가입성공");
          navi("/");
        } else {
          alert("가입실패");
        }
      });
    }
  };

  return (
    <table id="joinTable">
      <tr>
        <th>회원가입</th>
      </tr>
      <tr>
        <td align="center">
          <input
            value={member.id}
            name="id"
            onChange={changeMemberInfo}
            placeholder="ID"
            maxLength={10}
            autoComplete="off"
          ></input>
        </td>
      </tr>
      <tr>
        <td align="center">
          <input
            value={member.pw}
            name="pw"
            onChange={changeMemberInfo}
            placeholder="PW"
            type="password"
            maxLength={10}
            autoComplete="off"
          ></input>
        </td>
      </tr>
      <tr>
        <td align="center">
          <input
            value={member.pwChk}
            name="pwChk"
            onChange={changeMemberInfo}
            placeholder="PW확인"
            type="password"
            autoComplete="off"
          ></input>
        </td>
      </tr>
      <tr>
        <td align="center">
          <input
            value={member.name}
            name="name"
            onChange={changeMemberInfo}
            placeholder="이름"
            maxLength={10}
            autoComplete="off"
          ></input>
        </td>
      </tr>
      <tr>
        <td align="center">
          <button onClick={join}>가입</button>
        </td>
      </tr>
    </table>
  );
};

export default Join;
