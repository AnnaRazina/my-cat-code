import './App.css';
import Description from './component/description/Description';
import Button from './component/button/Button';

function App() {
  return (
    <div className='App'>
      <Description/>
      <Button>
          CLICK ME!<br/>
          Нажимай, и ты узнаешь<br/>
          ВСЁ О СЕБЕ.<br/>
          И немного обо мне.<br/>
      </Button>
      <Description/>
    </div>
  );
}

export default App;
