import React from 'react';

const Bloco06Beneficios = () => {
    return (
        <section id="bloco6-features">
            <div className="container">
                <div className="features-layout">

                    {/* Coluna da Esquerda (Textos) */}
                    <div className="features-texto">
                        <p className="paragrafo-ponte">
                            A história de Rodrigo é apenas um exemplo do <strong>poder deste Manual</strong>. Ele é uma ponte entre o comprador bem informado e o vendedor preparado — <strong>impulsionando negociações justas e satisfatórias</strong>
                        </p>

                        <h3 className="subtitulo-solucao">Uma solução revolucionária que dá aos compradores total autonomia para decidir.</h3>

                        <ul className="lista-features">
                            <li><span>📘</span> Mais de 130 páginas com conteúdo técnico e estratégico</li>
                            <li><span>📑</span> 160 tópicos organizados para consulta rápida</li>
                            <li><span>🧭</span> Uma metodologia em 4 fases que orienta toda a jornada de compra</li>
                            <li><span>📎</span> Anexos técnicos que auxiliam na tomada de decisão</li>
                        </ul>
                    </div>

                    {/* Coluna da Direita (Imagem do Livro) */}
                    <div className="features-imagem">
                        <img src="/images/mockup.jpg" alt="Mockup do Manual Solar Buy-Side" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bloco06Beneficios;