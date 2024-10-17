import React, { useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import Indicators from './components/Indicators';
import Charts from './components/Charts';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [filesUploaded, setFilesUploaded] = useState(false);

  const handleUpload = () => {
    setFilesUploaded(true);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>Análisis Financiero Simplificado</h1>
            <p>Realiza simulaciones financieras en minutos.</p>
            {!filesUploaded && (
              <button onClick={handleUpload} className="cta-button">
                Simular Carga de Archivos
              </button>
            )}
          </div>
        </section>
        {filesUploaded && (
          <>
            <Indicators />
            <Charts />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
