import React from "react";
import './styles.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function Comentarios(){
    return (
        <>
        <Header/>
        <div class="comments-container">
            <div class="comments-content">
                <div class="author">PAULO</div>
                <div class="comment">
                    Filme sensacional. Foi um dos melhores filmes de heróis que já assisti. 
                    Robert Pattinson ficou incrível e combina muito bem com o personagem. Parabéns Matt Reeves!!
                </div>
                <div class="author">MARCOS</div>
                <div class="comment">Escolheram um ator com pinta de Coringa, nem parece Batman. 
                    Economizaram em tudo até no Batmóvel, o Vin Diesel tem um carro melhor que o Batman. Decepcionante...
                </div>
                <div class="author">MATEUS</div>
                <div class="comment">
                    Sombrio e com um toque de loucura, the batman é um dos melhores filme do morcego, 
                    mas tbm achei o filme longo demais
                </div>
            </div>
        </div>
        <Footer/>
        </>
        

    );
}

export default Comentarios;