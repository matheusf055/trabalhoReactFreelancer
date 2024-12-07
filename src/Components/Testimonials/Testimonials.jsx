// src/components/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { name: "Jaspreet", text: "Ótima experiência..." },
    { name: "Patricia", text: "Os serviços foram excelentes..." },
    { name: "Matheus", text: "Fiquei muito satisfeito..." },
  ];

  return (
    <section className="testimonials">
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>

      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p>{testimonial.text}</p>
            <div className="profile">
              <img src="https://via.placeholder.com/50" alt={`${testimonial.name} avatar`} />
              <div>
                <h4>{testimonial.name}</h4>
                <span>Cliente</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
