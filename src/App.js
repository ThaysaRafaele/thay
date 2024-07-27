import './App.css';
import Header from './Components/Header/index';
import { Sobre } from './Components/Sobre';
import { Footer } from './Components/Footer';
import { Profissional } from './Components/Profissional';

function App() {
  return (
    <div className="App">
      <Header />
      <Sobre />
      <Profissional />
      <Footer />
    </div>
  );
}

export default App;
