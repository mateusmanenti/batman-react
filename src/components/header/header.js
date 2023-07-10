import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import Logo from '../../assets/d4j5ztc-da5e89ef-95b6-44f7-ad84-4827335178b6.png';

function Header(){
    return (
        <header>
            <img id="logo" src={Logo} />
            <nav>
                <ul>
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
        </header>

    );
}


export default Header;