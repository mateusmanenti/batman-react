import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import Logo from '../../assets/d4j5ztc-da5e89ef-95b6-44f7-ad84-4827335178b6.png';

function Footer (){
    return (
        <footer>
            <img id="logo" src={Logo} />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Mateus Manenti</span>

            <nav class="footer-navigation">
                <ul class="footer-list">
                    <Link style={{textDecoration: 'none'}} to={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/contato'}>
                        <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/fotos'}>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/comentarios'}>
                        <li>Comentarios</li>
                    </Link>
                </ul>
        </nav>
        </footer>
    );
}

export default Footer;