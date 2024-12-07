import React, { useState, useEffect } from 'react';
import './Banner.css';
import banner from '/src/assets/automa195167195163o-de-processo-788x706.png';

const Banner = () => {
  const palavras = [
    "Tecnologia",
    "Inovação",
    "Eficiência",
    "Automação",
    "Transformação"
  ];

  const [palavraIndex, setPalavraIndex] = useState(0);
  const [texto, setTexto] = useState('');
  const [escrevendo, setEscrevendo] = useState(true);

  useEffect(() => {
    const palavraAtual = palavras[palavraIndex];
    let intervalo;

    if (escrevendo) {
      intervalo = setTimeout(() => {
        setTexto((prev) => palavraAtual.slice(0, prev.length + 1));
      }, 100);

      if (texto.length + 1 === palavraAtual.length) {
        setTimeout(() => {
          setEscrevendo(false);
        }, 700); 
      }
    } else {
      intervalo = setTimeout(() => {
        setTexto((prev) => palavraAtual.slice(0, prev.length - 1));
      }, 100);

      if (texto.length === 0) {
        setEscrevendo(true);
        setPalavraIndex((prevIndex) => (prevIndex + 1) % palavras.length);
      }
    }

    return () => clearTimeout(intervalo);
  }, [texto, escrevendo, palavras, palavraIndex]);

  return (
    <section className='banner-wrapper'>
      <div className="banner-container">
        <div className="banner-left">
          <div className="banner-title">
            <h1>
              <span className="gestao-text">Gestão de Processos e</span> <br />
              <span className="destaque-text">{texto}</span> <br />
            </h1>
            <p>
              Descubra os Benefícios da Consultoria em Gestão de Processos e Automação Robótica: 
              Potencialize a Eficiência Operacional, Reduza Custos e Leve Sua Empresa para o Próximo Nível Tecnológico.
            </p>
            <button className='conhecer-btn'>Quero conhecer</button>
          </div>
            <div className="stars">
              <div className='profile-pics'>
                <img src="/src/assets/file.jpg" alt="Profile 1" className="profile-pic" />
                <img src="/src/assets/file.jpg" alt="Profile 2" className="profile-pic" />
                <img src="/src/assets/file.jpg" alt="Profile 3" className="profile-pic" />
              </div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <p>5.0</p>
          </div>
            <p className="solutions-text">+ de 100 soluções entregues</p>
        </div>

        <div className="flexCenter banner-right">
          <div className='image-container'>
            <img src={banner} alt="Banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
