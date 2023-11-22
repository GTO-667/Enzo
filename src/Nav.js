import React from 'react';
import logo from "./image/shoes.png";
import './App.css';

function Nav() {
    return (
        <div className="page-container">
            <nav className="navbar">
                <div className="logo">SNEAKERS ADDICT</div>
                <ul className="nav-links">
                    <li><a href="apropos.html">À propos</a></li>
                    <li><a href="inscription.html">Inscription</a></li>
                </ul>
                <div className="search-bar">
                    <input type="text" placeholder="Rechercher..." />
                    <button className="search-btn">&#128269;</button>
                </div>
                <div className="account-icon">&#128100;</div>
            </nav>
            <div className="content-container">
                <div className="title-container">
                    <h2 className="nav-title"><strong>STUSSY BIMMER</strong></h2>
                </div>
                <div className="text-container">
                    <p>
                        Cette Dunk Low fictive en collaboration avec Stussy s'inspire de son évènement "l'Auto Club Speedway" en Californie en 2018.
                    </p>
                    <p>
                        Jeune artiste, fan de streetwear, sur son compte Instagram, il nous présente son art avec des paires folles et des concepts toujours originaux.
                    </p>
                </div>
                <div className="shoes-container">
                    <img src={logo} alt="Chaussures" className="shoes-image" />
                </div>
            </div>
            <footer className="footer">
                <div className="left-section">
                    <div className="sneakers-addict">SNEAKERS ADDICT</div>
                    <form className="newsletter-form">
                        <input type="text" placeholder="Ton prénom" /><br />
                        <input type="text" placeholder="Ton nom" /><br />
                        <input type="email" placeholder="Ton email" /><br />
                        <button className="newsletter-btn">Inscris-toi à notre Newsletter !</button>
                    </form>
                </div>
                <div className="middle-section">
                    <div className="follow-us">Follow nous !</div>
                    <div className="social-media-icons">
                        
                        <div className="social-media-icons">
    {/* Mettez ici vos logos de réseaux sociaux avec les liens correspondants */}
    <a href="#"><img src={require("./image/inst.png")} alt="Instagram" /></a>
    <a href="#"><img src={require("./image/tik.png")} alt="TikTok" /></a>
    <a href="#"><img src={require("./image/pint.png")} alt="Pinterest" /></a>
</div>
                    </div>
                </div>
                <div className="right-section">
                    <div className="your-opinion">VOTRE AVIS NOUS INTÉRESSE !</div>
                </div>
            </footer>
        </div>
    );
}
export default Nav;