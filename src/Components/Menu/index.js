
import './styles.css';

export function Menu() {
    return (
        <>
           <div class="menuCirculo"></div>

            <div class="menu-wrap">
                <div class="menu">
                    <div class="link-list">
                        <li><a href="https://denisechandler.com">Home</a></li>
                        <li><a href="https://denisechandler.com/#portfolio">Portfolio</a></li>
                        <li><a href="https://denisechandler.com/fonts">Store</a></li>
                        <li><a href="mailto:deniselchandler@gmail.com?subject=DeniseChandler.com Contact Form">Contact</a></li>
                    </div>
                </div>
            </div>

            <div class="menuHolder">
                <button class="c-hamburger c-hamburger--htx" id="open-button">
                    <span>toggle menu</span>
                </button>
            </div>
                
            <div class="space"></div>
        </>
    );
}