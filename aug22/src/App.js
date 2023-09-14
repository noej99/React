import { Route, Routes } from "react-router-dom";
import "./App.css";
import First from "./page/first";
import Second from "./page/second";
import Third from "./page/third";
import Fourth from "./page/fourth";
import Fifth from "./page/fifth";
import Sixth from "./page/sixth";
import Seventh from "./page/seventh";

// 등록 안되어있는 주소쓰면 *로
function App() {
  return (
    <Routes>
      <Route index element={<First/>} />
      <Route path="/second.go" element={<Second />} />
      <Route path="/third.go/:n/:p" element={<Third />} />
      <Route path="/fourth.go" element={<Fourth />} />
      <Route path="/fifth.go" element={<Fifth />} />
      <Route path="/sixth.go" element={<Sixth />} />
      <Route path="*" element={<Seventh />} />
    </Routes>
  );
}

export default App;
