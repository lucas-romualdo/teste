import React, { useState, useEffect, useRef } from 'react'; // 1. Importar os hooks necessários
import '../App.css';

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
import EbookPopup from './EbookPopup';

const LandingPage = () => {
  // 2. Adicionar os states para controlar o pop-up
  const [showPopup, setShowPopup] = useState(false);
  const [hasPopupShown, setHasPopupShown] = useState(false);
  const bloco12Ref = useRef(null);

  // 3. Adicionar a lógica dos gatilhos (scroll e intenção de saída)
  useEffect(() => {
    const triggerPopup = () => {
      if (!hasPopupShown) {
        setShowPopup(true);
        setHasPopupShown(true);
      }
    };

    // Lógica para Intenção de Saída
    const handleMouseOut = (e) => {
      if (e.clientY <= 0) {
        triggerPopup();
      }
    };

    // Lógica para Scroll até o Bloco 12
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          triggerPopup();
        }
      },
      { threshold: 0.5 }
    );

    if (bloco12Ref.current) {
      observer.observe(bloco12Ref.current);
    }

    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseout', handleMouseOut);
      if (bloco12Ref.current) {
        observer.unobserve(bloco12Ref.current);
      }
    };
  }, [hasPopupShown]);

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

      {/* 4. Ancorar a referência no Bloco 12 */}
      <div ref={bloco12Ref}>
        <Bloco12Ebook />
      </div>

      <Bloco13Contato />
      <Bloco14Faq />

      {/* 5. Renderizar o pop-up condicionalmente */}
      <EbookPopup show={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default LandingPage;