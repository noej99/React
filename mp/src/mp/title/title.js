import React from "react";
import logoImg from "./bonobono.jpg";
import { Link } from "react-router-dom";
import Login from "../member/login";
import { useSelector } from "react-redux";
import Logined from "../member/logined";

const Title = () => {
  const loginInfo = useSelector((s) => s.ls.loginMember);

  let loginPage = null;
  if (loginInfo.id === undefined || loginInfo.id === "") {
    loginPage = <Login />;
  } else {
    loginPage = <Logined />;
  }

  return (
    <table id="siteTitle">
      <tr>
        <th align="center">
          <Link to="/">
            <img src={logoImg} alt="" />
          </Link>
        </th>
      </tr>
      <tr>
        <td id="siteMenu" align="center">
          <table id="siteMenu2">
            <tr>
              <td align="right">{loginPage}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
};

export default Title;
