import React from 'react'
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const Site = () => {
    const siteCss = { marginLeft: "auto", marginRight: "auto", width: "1200px"};
    const txtt = useSelector((state) => state.mts.txt);
  return (
    <table border={1} style={siteCss}>
        <tr>
            <th>{txtt}</th>
        </tr>
        <tr>
            <td>
                <Link to="/">홈</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/sns.go">SNS</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/mypage.go">마이페이지</Link>
            </td>
        </tr>
        <tr>
            <td>
                <Outlet />
            </td>
        </tr>
    </table>
  )
}

export default Site