import React from 'react';
import './styles.css';

export function Profissional() {
    return(        
        <div class="profissionalBkg">
            <div class="profissional">
                {/* <img className='tela' src="/Imagens/wave2.svg" alt="" /> */}
                <div class="profissionalWrapper">
                    <div class="profissionalMobile">
                        {/* <img className='tela' src="/Imagens/mão.png" alt="" /> */}
                        <div class="profissionalLeft">
                            teste
                            <h2> Eu 
                                <img class="pulse" src="https://denisechandler.com/wp-content/themes/portfolio_oct2021/images/heart2.png" alt="love" /> 
                                Trabalhar com <br />desenvolvimento web
                            </h2>
                        </div>
                        <div class="space"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
