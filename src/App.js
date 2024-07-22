import './App.css';
import Header from './Components/Header/index';
import { Sobre } from './Components/Sobre';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Sobre />
      <Footer />
    </div>
  );
}

export default App;
