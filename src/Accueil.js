import React from 'react';
import './App.css';
import logo from './stussybimmer.png';

function Accueil() {
    return (
        <>
            <div className="parallax">
                <div className="container">
                    <div className="content">
                        <h1>STUSSY BIMMER</h1>
                        <h6>conception réalisée par @andu.c. </h6>
                        <p>Cette Dunk Low fictive en collaboration avec Stussy s'inspire de son événement "l'Auto Club Speedway" en Californie en 2018
                            <br /><br />Jeune artiste, fan de streetwear, sur son compte Instagram, il nous présente son art avec des paires folles et des concepts toujours originaux.</p>
                    </div>
                    <img src={logo} alt="stussy" width="100%" />
                </div>
            </div>

            <div className="parallax">
                <div className="container">
                    <div className="content">
                        <img src={logo} alt="stussy" width="100%" />
                        <div>
                            <h1>STUSSY BIMMER</h1>
                            <h6>conception réalisée par @andu.c. </h6>
                            <p>Cette Dunk Low fictive en collaboration avec Stussy s'inspire de son événement "l'Auto Club Speedway" en Californie en 2018
                                <br /><br />Jeune artiste, fan de streetwear, sur son compte Instagram, il nous présente son art avec des paires folles et des concepts toujours originaux.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Accueil;



