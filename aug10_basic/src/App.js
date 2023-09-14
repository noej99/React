import './App.css';
import CssFirst from './css/cssFirst';
import CssSecond from './css/cssSecond';
import InputFirst from './input/inputFirst';
import InputSecond from './input/inputSecond';
import PropsFirst from './props/propsFirst';
import PropsSecond from './props/propsSecond';
import PropsThird from './props/propsThird';
import RsFirst from './repeatStmt/rsFirst';
import RsSecond from './repeatStmt/rsSecond';

// alt + shift + o

function App() {
  return (
    <>
      <RsFirst/>
      <hr/>
      <RsSecond/>
      <hr/>
      <InputFirst/>
      <hr/>
      <InputSecond/>
      <hr/>
      <CssFirst/>
      <hr/>
      <CssSecond/>
      <hr/>
      <PropsFirst name="마우스" price="10000"/>
      <hr/>
      <PropsFirst name="키보드" price="15000"/>
      <hr/>
      <PropsSecond name='새우깡' maker={"농심"} price={3000}/>
      <hr/>
      <PropsThird>ㅋㅋㅋ</PropsThird>
    </>
  );
}

export default App;
