import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home";
import SNS from "./sns";
import Site from "./site";
import MyPage from "./myPage";

function App() {
  return (
    <Routes>
      <Route element={<Site />}>
        <Route path="/" element={<Home />} />
        <Route path="/sns.go" element={<SNS />} />
        <Route path="/mypage.go" element={<MyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
