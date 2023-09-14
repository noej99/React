import React from "react";
import { styled } from "styled-components";
// yarn add styled-components
// vscode-styled-components add on설치

// styled.태그명
const MyDiv = styled.div`
  background-color: red;
  color: blue;
  width: 100px;
  height: 100px;
  margin: 10px;
`;

const MyBtn = styled.button`
  background-color: green;
  color: yellow;
  margin: 20px;
  cursor: pointer;

  // & : 자기자신
  &:hover {
    background-color: yellow;
    color: green;
  }
`;

const Design4 = () => {
  return (
    <>
      <MyDiv>ㅋㅋㅋ</MyDiv>
      <MyDiv>ㅎㅎㅎ</MyDiv>
      <MyBtn>ㅡㅡ</MyBtn>
      <MyBtn>ㅇㅇ</MyBtn>
    </>
  );
};

export default Design4;
