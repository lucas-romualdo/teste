import React from 'react';

const Bloco04Manual = () => {
    return (
        <section id="bloco4">
            <div className="container">
                {/* Título atualizado para corresponder à referência */}
                <h2>
                    <span className="titulo-laranja">Manual Solar Buy-Side:</span> Sua ferramenta estratégica essencial para todos os profissionais do setor solar.
                </h2>

                {/* Container para o layout de duas colunas */}
                <div className="manual-layout">
                    {/* Coluna da Imagem (Esquerda) */}
                    <div className="manual-imagem">
                        <img src="/images/manual.jpg" alt="Manual de Compra Profissional Solar Buy-Side" />
                    </div>

                    {/* Coluna do Texto (Direita) */}
                    <div className="manual-texto">
                        {/* Parágrafos separados e com destaques em negrito */}
                        <p>O Manual de Compra Profissional Solar Buy-Side é uma leitura essencial para profissionais do setor de vendas (Sell-Side) que desejam se <strong>destacar em um mercado ultracompetitivo.</strong></p>
                        <p>Ao proporcionar uma imersão na jornada de compra <strong>sob a ótica do comprador</strong>, este manual oferece uma compreensão estratégica <strong>dos critérios, motivações e desafios</strong> enfrentados pelo lado comprador (Buy-Side).</p>
                        <p>Ao dominar o conceito Buy-Side, vendedores estarão aptos a <strong>lapidar</strong> sua abordagem comercial, <strong>entregar valor real</strong>, <strong>distanciar-se da briga por preço</strong> e elevar sua credibilidade no relacionamento com os clientes.</p>
                        <a href="#bloco11" className="cta-button">QUERO ME DIFERENCIAR!</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bloco04Manual;