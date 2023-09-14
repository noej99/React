import React from "react";
import { useSelector } from "react-redux";

const Logined = () => {
  const loginInfo = useSelector((s) => s.ls.loginMember);
  return (
    <table>
      <tr>
        <td>{loginInfo.id}님 안녕하세요</td>
        <td>
          <button
            onClick={() => {
              sessionStorage.removeItem("loginToken");
            }}
          >
            로그아웃
          </button>
        </td>
      </tr>
    </table>
  );
};

export default Logined;
