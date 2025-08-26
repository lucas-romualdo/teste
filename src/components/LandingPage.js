import React from 'react';

// CORREÇÃO 1: O CSS está um nível acima, então usamos '../'
import '../App.css'; 

// CORREÇÃO 2: Os componentes estão na mesma pasta, então usamos './'
import Bloco01Hero from './Bloco01Hero';
import Bloco02Video from './Bloco02Video';
import Bloco03Publico from './Bloco03Publico';
import Bloco04Manual from './Bloco04Manual';
import Bloco05Resultados from './Bloco05Resultados';
import Bloco06Beneficios from './Bloco06Beneficios';
import Bloco07Oferta from './Bloco07Oferta';
import Bloco08Comprador from './Bloco08Comprador';
import Bloco09Depoimentos from './Bloco09Depoimentos';
import Bloco10Autor from './Bloco10Autor';
import Bloco11OfertaFinal from './Bloco11OfertaFinal';
import Bloco12Ebook from './Bloco12Ebook';
import Bloco13Contato from './Bloco13Contato';
import Bloco14Faq from './Bloco14Faq';
// O Footer será chamado no App.js, então não precisamos dele aqui.

const LandingPage = () => {
  return (
    <>
      <Bloco01Hero />
      <Bloco02Video />
      <Bloco03Publico />
      <Bloco04Manual />
      <Bloco05Resultados />
      <Bloco06Beneficios />
      <Bloco07Oferta />
      <Bloco08Comprador />
      <Bloco09Depoimentos />
      <Bloco10Autor />
      <Bloco11OfertaFinal />
      <Bloco12Ebook />
      <Bloco13Contato />
      <Bloco14Faq />
    </>
  );
};

export default LandingPage;