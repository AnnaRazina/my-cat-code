import './App.css';
import Description from './component/description/Description';
import Button from './component/button/Button';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className='App'>
      <main className='App_main'>
        <Description/>
        <Button>
            CLICK ME!<br/>
            Нажимай, и ты узнаешь<br/>
            ВСЁ О СЕБЕ.<br/>
            И немного обо мне.<br/>
        </Button>
        <Description/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
