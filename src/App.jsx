import Naus from './components/Naus';
import './App.css';
import logo from './images/logo.png'


function App() {
  return (
    <>
    <header>
      <img src={logo} alt="logo" width='200px'/>
    </header>
    <main className='llista'>
      <Naus/>
    </main>
    
    </>
  );
}

export default App;
