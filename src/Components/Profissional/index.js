import React from 'react';
import './styles.css';

export function Profissional() {
    return(        
        <div class="profissionalBkg">
            <div class="profissional">
                <div class="profissionalWrapper">
                    <div class="profissionalMobile">
                        <div class="profissionalLeft">
                            <div className="title">
                                <h2> Eu 
                                    <img class="pulse" src="/Imagens/coração.png" alt="love" /> 
                                    Trabalhar com desenvolvimento web
                                </h2>   
                            </div>
                                                     
                            Sou especializado na criação de sites para pessoas físicas e pequenas empresas. 
                            Não se conforme com soluções baratas ou modelos genéricos! Eu ofereço designs personalizados a preços acessíveis. 
                            Tennha em mente que seu site é a primeira impressão que seus clientes terão, portanto, garanta que seja atrativo. 
                        </div>
                        <div class="space"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
