import './styles.css'

export function Footer() {
    return (
        <>
            <div class="footerOnda"></div>

            <div class="details" id='contato'> 
                <img class="imagemDetail" src="/Imagens/details-footer.png" alt="" />
            </div>
            
            <div class="footer">
                <div class="footerGradient">
                    <div class="footerWrapper">
                        <div class="footerLeft">                            
			                Join the mailing list or follow me on social media to receive occasional updates about new fonts, freebies, giveaways, and sales!
                            <div id="mc_embed_signup">
                                formulário
                            </div>
                        </div>
                        <div class="space"></div>
                    </div>
                    <div class="footerLinks">
                        <a href="#home">Home</a> 
                        &nbsp;•&nbsp; 
                        <a href="#sobre">Sobre</a> 
                        &nbsp;•&nbsp; 
                        <a href="#projetos">Projetos</a> 
                        &nbsp;•&nbsp; 
                        <a href="mailto:thaysarafaele@gmail.com?subject=Thaysa Rafaele Contact Form">Contato</a>
                        &nbsp;•&nbsp; ©2024 Thaysa Rafaele
                    </div>
                </div>
            </div>
        </>
    );
}