import { Route, Routes } from "react-router-dom";
import "./App.css";
import MP from "./mp/mp";
import Home from "./mp/home";
import "./mp/member/member.css"
import Join from "./mp/member/join";

// index.css : 사이트 전체의 규칙
// App.css : 사이트 레이아웃
// index.js -> App.js -> mp.js

function App() {
  return (
    <Routes>
      <Route element={<MP />}>
        <Route path="/" element={<Home />} />
        <Route path="/join.go" element={<Join />} />
      </Route>
    </Routes>
  );
}

export default App;
