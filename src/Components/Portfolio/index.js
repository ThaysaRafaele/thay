import './styles.css'

export function Portfolio() {
    return(
        <div className="container">
            <div class="portfolio" id="portfolio">
                <div class="portfolioBox">
                    <a class="inline cboxElement" href="#inline_content1">
                        <div id="box">
                            <img id="content" src="/Imagens/pasta6.png" alt="Adam Gidwitz" />
                        </div>
                    </a>
                </div>
                <div class="portfolioBox">
                    <a class="inline cboxElement" href="#inline_content2">
                        <div id="box">
                            <img id="content" src="/Imagens/pasta6.png" alt="Briabby" />
                        </div>
                    </a>
                    <br/>
                    <h4>Thaysa</h4>
                    Web design/development
                </div>
                <div class="spaceTwo"></div>
            </div>
        </div>
    );
}