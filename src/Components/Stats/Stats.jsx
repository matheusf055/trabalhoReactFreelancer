import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <section className="stats">
      <div className="stat-item">
        <h2>500 mil</h2>
        <p>usuários em nossa plataforma</p>
      </div>
      <div className="stat-item">
        <h2>30 mil</h2>
        <p>empresas conectadas</p>
      </div>
      <div className="stat-item">
        <h2>+5 mil</h2>
        <p>cidades impactadas</p>
      </div>
      <div className="stat-item">
        <h2>15 anos</h2>
        <p>de experiência</p>
      </div>
    </section>
  );
};

export default Stats;
