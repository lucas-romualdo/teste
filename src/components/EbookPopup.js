// src/components/EbookPopup.js
import React from 'react';

const EbookPopup = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close" onClick={onClose}>&times;</button>
                
                <div className="popup-grid">
                    <div className="popup-imagem">
                        <img src="/images/ebook.jpg" alt="Capa do E-book Gratuito" />
                    </div>
                    <div className="popup-texto">
                        <h3>Ainda com dúvidas sobre o impacto do Manual?</h3>
                        <p>Baixe agora nosso e-book gratuito e comece a desvendar os segredos do comprador:</p>
                        <ul>
                            <li>✔️ Os 3 riscos na compra de sistemas solares</li>
                            <li>✔️ As 4 fases que seu cliente seguirá antes de comprar</li>
                            <li>✔️ Como sua proposta será avaliada — e comparada</li>
                            <li>✔️ O índice detalhado do manual Solar Buy-Side</li>
                        </ul>
                        <a href="#bloco12" onClick={onClose} className="cta-button">BAIXAR E-BOOK GRÁTIS</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EbookPopup;