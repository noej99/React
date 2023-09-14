import React from 'react'
import MyBtns from './myBtns'
import MyH1 from './myH1'
import MyInput from './myInput'
// 객체간의 데이터 주고받기
// 상태관리 라이브러리 redux
// React + redux

// yarn add @reduxjs/toolkit react-redux
const MyPage = () => {
  return (
    <>
        <MyInput />
        <hr />
        <MyBtns />
        <hr />
        <MyH1 />
    </>
  )
}

export default MyPage