import React, { lazy, Suspense } from "react";
import Header from "../../components/header/header";
import Cards from "../../components/cards";
import './styles.css';
import Video from "../../assets/BATMAN  _ Trailer 2 Oficial Legendado _ DC FanDome 2021.mp4"
import Footer from "../../components/footer/footer";

function Home(){
   
    return(
        <>
            <Header/>
            <div id="banner"></div>
            <div id="trailer-container">
                <div className="content">
                    <video controls className="trailer">
                        <source src={Video} />
                        Seu navegador nao possui suporte para videos
                    </video>
                
                    <div id="sinopse">
                        <p className="description">
                            Batman se aventura no submundo de Gotham City quando 
                            um assassino sádico deixa para trás um rastro de pistas enigmáticas. 
                            À medida que as evidências começam a chegar mais perto de casa 
                            e a escala dos planos do criminoso se torna clara, ele deve forjar 
                            novos relacionamentos, desmascarar o culpado e trazer justiça ao abuso de 
                            poder e à corrupção que há muito atormentam a metrópole.
                        </p>
                        <button className="button">Comprar ingresso</button>
                    </div>
                </div>
            </div>
            <Cards />
            <Footer/>
        </>
    )
}

export default Home;