import './App.css';
import Header from './Components/Header/index';
import { Menu } from './Components/Menu';
import { Sobre } from './Components/Sobre';
import { Footer } from './Components/Footer';
import { Profissional } from './Components/Profissional';
import { Portfolio } from './Components/Portfolio';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Sobre />
      <Profissional />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
