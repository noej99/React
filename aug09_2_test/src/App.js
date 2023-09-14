import "./App.css";
import MyH1 from "./myH1";
import MyBTN from "./myBTN";

// alt + shift + f : 소스 정렬
// alt + shift + 위/아래 : 줄 복사
// ctrl + shift + k : 줄 삭제

// react :
//    VitualDOM을 활용해서 잦은 업데이트 용이
//    OOP

// JSX(JavaScript XML)
//    HTML비슷
//    DOM객체 하나여야
function App() {
  return (
    <div>
      <MyBTN/>
      <MyBTN/>
      <MyH1></MyH1>
      <MyH1></MyH1>
    </div>
  );
}

export default App;
