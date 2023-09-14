// reducer : 현재상태(state) + 행동(action)을 받아서
// 새로운 state를 리턴하는 함수
// reducer  + action = slice

// rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sizekeke: 10,
}

const MySizeSlice = createSlice({
  name: "msshaha",
  initialState,
  reducers: {
    goBigger: (stateQ) => { 
        stateQ.sizekeke += 10;
     },
    goSmaller: (stateW) => {
        stateW.sizekeke -= 10;
     },
  },
});

export const {goBigger, goSmaller} = MySizeSlice.actions

export default MySizeSlice.reducer