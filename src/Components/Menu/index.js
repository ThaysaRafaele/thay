import { useState } from 'react';
import './styles.css';

export function Menu() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
        const htmlElement = document.documentElement;
        htmlElement.classList.toggle('show-menu');
    };

    return (
        <>
            <div className="menuCircle"></div>

            <div className={`menu-wrap ${isActive ? 'show-menu' : ''}`}>
                <div className="menu">
                    <div className="link-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#projetos">Portfolio</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </div>
                </div>
            </div>

            <div className="menuHolder">
                <button
                    className={`c-hamburger c-hamburger--htx ${isActive ? 'is-active' : ''}`}
                    id="open-button"
                    onClick={toggleMenu}
                >
                    <span>toggle menu</span>
                </button>
            </div>
                
        </>
    );
}