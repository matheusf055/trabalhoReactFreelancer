import React from "react";
import "./Partners.css";

import partners1 from '/src/assets/download.png';
import partners2 from '/src/assets/formulaCerta-nbmnNeLU.png';
import partners3 from '/src/assets/lecom--pBw4p8B.png';
import partners4 from '/src/assets/nomus-nOitb00p.png';
import partners5 from '/src/assets/omie-f_Nwp7tc.png';

const Partners = () => {
  return (
    <section className="partners-section">
      <h2>Parceiros</h2>
      <div className="partners-logos">
        <img src={partners1} alt="Parceiro 1" />
        <img src={partners2} alt="Parceiro 2" />
        <img src={partners3} alt="Parceiro 3" />
        <img src={partners4} alt="Parceiro 4" />
        <img src={partners5} alt="Parceiro 5" />
      </div>
    </section>
  );
};

export default Partners;
