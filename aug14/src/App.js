import "./App.css";
import EventFirst from "./event/eventFirst";
import EventSecond from "./event/eventSecond";
import HookFirst from "./hook/hookFirst";
import HookFourth from "./hook/hookFourth";
import HookSecond from "./hook/hookSecond";
import HookThird from "./hook/hookThird";

function App() {
  return (
    <>
      <HookFirst />
      <hr />
      <HookSecond />
      <hr />
      <HookThird />
      <hr />
      <EventFirst />
      <hr />
      <EventSecond />
      <hr />
      <HookFourth />
    </>
  );
}

export default App;
