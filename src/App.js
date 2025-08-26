import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; 

// Os componentes estão na subpasta 'components', então é './components/'
import LandingPage from './components/LandingPage';
import PoliticaDePrivacidade from './components/PoliticaDePrivacidade';
import TermosDeUso from './components/TermosDeUso';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App; // <-- Esta é a linha que provavelmente estava faltando ou incorreta.