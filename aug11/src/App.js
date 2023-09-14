import './App.css';
import KeyboardEvent from './event/keyboardEvent';
import MouseEvent from './event/mouseEvent';
import NewInput from './event/newInput';
import PopupMenu from './event/popupMenu';
import Today from './today/today';
import Yesterday from './yesterday/yesterday';

function App() {
  return (
    <div>
      <Today></Today>
      <hr/>
      <NewInput></NewInput>
      <hr/>
      <KeyboardEvent></KeyboardEvent>
      <hr/>
      <PopupMenu></PopupMenu>
      <hr/>
      <MouseEvent></MouseEvent>
      <hr/>
     <Yesterday></Yesterday>
    </div>
  );
}

export default App;
