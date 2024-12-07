import React from 'react';
import './Hero.css';

import automacaoImg from '/src/assets/icon1.png';
import gestaoImg from '/src/assets/icon2.png';
import erpImg from '/src/assets/icon3.png';
import analiseImg from '/src/assets/icon4.png';

const Hero = () => {
  const cardData = [
    { title: "Automação de Sistemas", image: automacaoImg },
    { title: "Gestão de processo e tecnologia", image: gestaoImg },
    { title: "Implantação ERP e no rh", image: erpImg },
    { title: "Implantação e análise de tecnologia", image: analiseImg },
  ];

  return (
    <section className="hero">
      <h1>Descubra a transformação: Qual solução sua empresa precisa para alcançar novos horizontes?</h1>
      <p>Explore Oportunidades, Potencialize Eficiências e Eleve Seu Negócio ao Próximo Nível. Descubra as Soluções Personalizadas que Impulsionarão sua Empresa rumo ao Sucesso.</p>

      <div className="cards">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} className="card-image" />
            <h3>{card.title}</h3>
            <button>Ver Mais</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
