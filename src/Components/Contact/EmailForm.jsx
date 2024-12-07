import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './EmailForm.css';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_xrnlf1q';
    const templateId = 'template_qvzehcq';
    const publicKey = 'tAMjwDk8if6tGFsew';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Web Wizard',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <>
    <div class="banner">
      <h1>Bem-vindo ao nosso Fale Conosco!</h1>
      <p>Estamos aqui para ajudar. Preencha o formulário ou entre em contato pelos canais abaixo.</p>
    </div>
    <div class="contact-page">
        <div class="contact-info">
          <div class="contact-item">
            <h2>Suporte</h2>
            <button class="support-btn">Enviar Solicitação</button>
          </div>
          <div class="contact-item">
            <h2>Telefone</h2>
            <p>(31) 3262-3464</p>
          </div>
          <div class="contact-item">
            <h2>Localização</h2>
            <p><strong>Sede:</strong> R. Tomé de Souza, 845 - 2º andar - Funcionários, Belo Horizonte - MG, 30140-136</p>
            <p><strong>BH II:</strong> R. Tomé de Souza, 830 - Funcionários, Belo Horizonte - MG, 30140-136</p>
            <p><strong>São Paulo/SP:</strong> Av. Paulista, 2300 - Consolação, São Paulo - SP, 01310-300</p>
          </div>
        </div>
        <div class="contact-form-container">
          <h1>Como podemos te ajudar?</h1>
          <form onSubmit={handleSubmit} class="contact-form">
            <input type="text" placeholder="Nome*" required value={name}  onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="E-mail Corporativo*" required  value={email}  onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Telefone com DDD ou WhatsApp*" required />
            <input type="text" placeholder="Empresa*" required />
            <textarea placeholder="Escreva sua mensagem aqui" rows="4" required value={message}  onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit" class="submit-btn">Enviar</button>
          </form>
        </div>
      </div></>
  );
};

export default EmailForm;
