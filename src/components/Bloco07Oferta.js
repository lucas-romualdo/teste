import React from 'react';

const Bloco07Oferta = () => {
    return (
        <section id="bloco7">
            <div className="container">
                <h2>Atenção: essa oportunidade de sair na frente não durará para sempre.</h2>
                <p>Esteja preparado antes que seus clientes e concorrentes saibam mais do que você:</p>
                <p className="oferta-limitada">
                    <strong>Esta oferta exclusiva para profissionais é por tempo limitado!</strong> Após o período esgotado de pré-venda para profissionais do setor solar, o manual será distribuído em todo o território nacional para o público consumidor e você perderá a chance de sair na frente.
                </p>

                <div className="bloco-preco">
                    <p className="preco-principal">R$ 597 À VISTA</p>
                    <p className="parcelas">OU 12 X R$ 61,75</p>
                    <div className="garantia">
                        <span>GARANTIA RISCO ZERO!</span>
                    </div>
                </div>

                <a href="#bloco11" className="cta-button">QUERO SAIR NA FRENTE AGORA!</a>
            </div>
        </section>
    );
};

export default Bloco07Oferta;