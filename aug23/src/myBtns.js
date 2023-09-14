import {useDispatch} from 'react-redux';
import React from 'react'
import { goBigger, goSmaller } from './mySizeSlice';

// dispatcher : 상태를 바꾸는
const MyBtns = () => {
    const d = useDispatch();
  return (
    <>
        <button onClick={() => { 
            d(goBigger());
         }}>크게</button>
        <button onClick={() => { 
            d(goSmaller());
         }}>작게</button>
    </>
  )
}

export default MyBtns