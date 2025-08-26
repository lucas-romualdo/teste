import React from 'react';

const Bloco12Ebook = () => {
    return (
        <section id="bloco12">
            <div className="container">
                <div className="ebook-layout">
                    {/* Coluna da Esquerda: Conteúdo e Formulário */}
                    <div className="ebook-conteudo">
                        <h2>Se, mesmo com todas essas informações, você ainda tem dúvidas sobre o impacto do Manual Buy-Side, temos uma prévia gratuita para você.</h2>
                        <p>Baixe agora nosso e-book e comece a desvendar os segredos do comprador:</p>

                        <ul className="lista-ebook">
                            <li><span>✅</span> Os 3 riscos na compra de sistemas solares</li>
                            <li><span>✅</span> As 4 fases que seu cliente seguirá antes de comprar</li>
                            <li><span>✅</span> Como sua proposta será avaliada — e comparada</li>
                            <li><span>✅</span> o índice detalhado do manual Solar Buy-Side</li>
                        </ul>

                        <div className="formulario-container">
                            <h3>FORMULÁRIO:</h3>
                            <form action="#" method="post">
                                <label htmlFor="nome">Nome e sobrenome:</label>
                                <input type="text" id="nome" name="nome" />

                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" />

                                <label htmlFor="celular">Celular:</label>
                                <input type="tel" id="celular" name="celular" />

                                <button type="submit">BAIXAR E-BOOK GRATUITO</button>
                            </form>
                            <p className="post-submit-message">Após enviar: "Confira seu e-mail para baixar o E-Book Manual Solar Buy-Side".</p>
                        </div>
                    </div>

                    {/* Coluna da Direita: Imagem do E-book */}
                    <div className="ebook-imagem">
                        <img src="/images/ebook.jpg" alt="Capa do E-book Gratuito Manual Solar Buy-Side" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bloco12Ebook;