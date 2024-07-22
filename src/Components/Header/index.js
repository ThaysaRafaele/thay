import React from 'react';
import './styles.css';

const Header = () => (
  <header>
    <div class="bannerBkg">
      <div class="banner">
        {/* <h1>Thaysa Rafaele</h1> */}
        {/* <nav>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Sobre">Sobre</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#Contato">Contato</a></li>
          </ul>
        </nav> */}
        <img className='tela' src="/Imagens/tela.png" alt="" />

        {/* Joaninhas */}
        <div className="ladybug1">
          <img className='joaninha' src="/Imagens/joaninha7.png" alt="" />
        </div>
        
        <div className="ladybug2">
          <img className='joaninha' src="/Imagens/joaninha6.png" alt="" />
        </div>

        {/* ponteiros do relógio */}
        <div class="bannerClock">
          <img class="rotate3" src="/Imagens/Avatar2.png" alt="clock" />
        </div>
        <div class="bannerClock2">
          <img class="rotate4" src="/Imagens/Avatar.png" alt="clock" />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
