import './App.css';
import Header from './Components/Header/index';
import { Sobre } from './Components/Sobre';
import { Footer } from './Components/Footer';
import { Profissional } from './Components/Profissional';
import { Portfolio } from './Components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Sobre />
      <Profissional />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
