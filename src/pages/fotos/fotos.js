import React from "react";
import Header from "../../components/header/header";
import './styles.css';
import Footer from "../../components/footer/footer";

function Fotos(){
    return(
        <>
            <Header/>
            <div class="fotos-container">
                <div class="fotos-content">
                    <div class="foto foto-1"></div>
                    <div class="foto foto-2"></div>
                    <div class="foto foto-3"></div>
                    <div class="foto foto-1"></div>
                    <div class="foto foto-2"></div>
                    <div class="foto foto-3"></div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Fotos;