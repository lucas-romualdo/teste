import React from 'react';

const Bloco10Autor = () => {
    return (
        <section id="bloco10">
            <div className="container">
                <div className="author-section">
                    {/* Coluna da Esquerda (Textos) */}
                    <div className="author-texto">
                        <h2>Esse conteúdo só é possível porque foi criado por quem viveu os dois lados da mesa — o do comprador e o do vendedor!</h2>
                        <h3>Francis Poloni - <span className="cargo-laranja">Consultor Buy-Side e Sell-Side</span></h3>
                        <p>Atua desde 2018 no setor de integração fotovoltaica e consultoria em investimento onde assessorou tanto no <strong>lado do comprador (Buy-Side)</strong> quanto no <strong>lado do vendedor (Sell-Side)</strong>, ajudando na tomada de decisões inteligentes e seguras.</p>
                    </div>

                    {/* Coluna da Direita (Imagem) */}
                    <div className="author-imagem">
                        <img src="/images/francis.jpg" alt="Foto de Francis Poloni" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bloco10Autor;