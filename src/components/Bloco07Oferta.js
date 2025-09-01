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
                        <img src='/images/garantia.png' alt='Garantia Zero'></img>
                    </div>

                    <div className="payment-icons">
                        <img src="./images/visa.png" alt="Visa" />
                        <img src="/images/mastercard.png" alt="Mastercard" />
                        <img src="/images/pix.svg" alt="Pix" />
                        <img src="/images/boleto.png" alt="Boleto" />
                        <span className="divider"></span>
                        <img src="/images/compra-segura.png" alt="Compra Segura" />
                    </div>

                    <a href="#bloco11" className="cta-button cta-duas-linhas">
                        <div>APROVEITE ESSA OFERTA ESPECIAL!</div>
                        <div className="texto-menor-botao">COMPRA AGORA</div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Bloco07Oferta;