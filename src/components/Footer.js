import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p><strong>Dirección:</strong>Medellín, Colombia</p>
        <p><strong>Teléfono:</strong> +57 123 456 789</p>
        <p><strong>Email:</strong> contacto@cirujanofinanciero.com</p>
      </div>
      <div className="footer-links">
        <a href="#privacy">Política de Privacidad</a>
        <a href="#terms">Términos de Servicio</a>
        <a href="#newsletter">Suscribirse al Boletín</a>
      </div>
    </footer>
  );
}

export default Footer;