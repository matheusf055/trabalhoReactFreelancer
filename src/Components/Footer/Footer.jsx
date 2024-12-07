import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Menu</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Soluções</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
          <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Soluções</h4>
          <ul>
            <li><a href="#">Gestão de processos e tecnologia</a></li>
            <li><a href="#">Implantação ERP e robô</a></li>
            <li><a href="#">Análise e Implantação</a></li>
            <li><a href="#">Automação de sistemas e processos</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Entrar em Contato</h4>
          <ul>
            <li>Telefone: (71) 2137-1747</li>
            <li>Email: contato@kssolutions.tech</li>
            <li><a href="#">Ir para formulário</a></li>
          </ul>
          <h4>Localização</h4>
          <p>
            Edifício Macêdo - R. Francisco Drumond, 41 <br />
            Centro, Camaçari - BA, 42800-063
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 - Todos os direitos reservados</p>
        <p>KS Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;
