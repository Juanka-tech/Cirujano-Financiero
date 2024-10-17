import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Cirujano Financiero</div>
      <nav className="nav">
        <ul>
          <li><a href="#upload">Importar Archivos</a></li>
          <li><a href="#analysis">Análisis Financiero</a></li>
          <li><a href="#charts">Gráficas</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <div className="header-actions">
        <button className="login-btn">Iniciar Sesión</button>
        <button className="cta-btn">Solicitar Análisis</button>
      </div>
    </header>
  );
}

export default Header;