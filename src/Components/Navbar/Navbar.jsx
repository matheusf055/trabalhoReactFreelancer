import React from 'react';
import './Navbar.css';
import logo from '/src/assets/logoColorida-JZyTlq_H.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="header">
            <a href="/" className='logo'>
                <img src={logo} alt="Logo da Empresa" />
            </a>
            <nav className="navbar">
                <a href="/">Empresa</a>
                <Link to="/about">Sobre</Link>
                <Link to="/contact">Contato</Link>
                <a href="/">Soluções KS</a>
                <button className="whatsapp-btn">
                    <i className="fab fa-whatsapp"></i>
                    Fale com especialista
                </button>
            </nav>
        </header>
    );
};

export default Navbar;
