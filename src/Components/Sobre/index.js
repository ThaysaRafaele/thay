import React from 'react';
import './styles.css';

export function Sobre() {
    return(
        <div class="sobreBkg">
            <div class="sobreWrapper">
                <div class="sobreLeft">
                    <img src="/Imagens/Avatar/me_bkg.png" alt="Thay Rafa"/>
                    <div class="sobreBody">
                        <img src="/Imagens/Avatar/teste3.png" alt="Thay Rafa" />
                    </div>
                    <div class="sobreMim">
                        <img class="pescoco" src="/Imagens/Avatar/cabeça3.png" alt="Thay Rafa" />
                    </div>
                </div>
                <div class="sobreRight">
                    <h1>Hello World! Meu nome é Thaysa.<br/>Eu sou uma desenvolvedora web &amp; 
                        <span class="introBreak"><br/></span>moro no Mato Grosso do Sul - Brasil
                    </h1>
                    Eu tenho trabalhado como dev freelance e frontend developer since 2021. Sempre fui uma pessoa muito criativa e que ama raciocínio lógico. 
                    Quando descobri o desenvolvimento web no frontend (durante a faculdade) percebi que seria o encaixe perfeito. 
                    Eu poderia usar meu lado criativo para criar e meu lado lógico para codar... 
                    Como bônus, já atuei como QA (tester) e ser desenvolvedora, me permite ficar mais atenta para garantir que nenhum detalhe seja perdido durante o desenvolvimento.
                        <br/><br/>

                        <a href="https://github.com/ThaysaRafaele" target="_blank" rel="noreferrer">
                            <div class="githubIcon2" id="hvr-bounce-in">
                                <img id="content" src="/Imagens/ícones/3.png" alt="Github" />
                            </div>
                        </a>

                        <a href="https://www.pinterest.com/deniselchandler/_created" target="_blank" rel="noreferrer">
                            <div class="instagramIcon2" id="hvr-bounce-in">
                                <img id="content" src="/Imagens/ícones/4.png" alt="Instagram" />
                            </div>
                        </a>

                        <a href="https://www.instagram.com/thaysarafaele/" target="_blank" rel="noreferrer">
                            <div class="linkedinIcon2" id="hvr-bounce-in">
                                <img id="content" src="/Imagens/ícones/2.png" alt="Linkedin" />
                            </div>
                        </a>

                        <div class="space"></div>
                </div>
                <div class="space"></div>
            </div>
        </div>
    );
}
