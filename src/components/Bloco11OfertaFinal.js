import React from 'react';

const Bloco11OfertaFinal = () => {
    return (
        <section id="bloco11">
            <div className="container">
                <h2>Por isso, não perca tempo nem posição no mercado. Veja tudo que você recebe nesta oferta profissional:</h2>

                <div className="oferta-final-box">
                    <h3>Oferta exclusiva para Profissional</h3>
                    <ul>
                        <li><span>💥</span> Oferta exclusiva para Profissional</li>
                        <li><span>🔓</span> Acesso imediato ao Manual Solar Buy-Side</li>
                        <li><span>📘</span> 130 páginas técnicas + 160 tópicos interativos</li>
                        <li><span>🧭</span> Método de jornada de compra completo em 4 fases</li>
                        <li><span>🎁</span> Anexos técnicos exclusivos</li>
                    </ul>
                    <p className="unidades-limitadas">Apenas 1.000 unidades na Pré-venda Profissional garantem essa oferta especial!</p>
                </div>

                {/* Este bloco de preço pode reutilizar o mesmo estilo do Bloco 7 */}
                <div className="bloco-preco">
                    <p className="preco-principal">R$ 597 À VISTA</p>
                    <p className="parcelas">OU 12 X R$ 61,75</p>
                    <div className="garantia">
                        <span>GARANTIA RISCO ZERO!</span>
                    </div>
                </div>

                {/* O botão pode reutilizar o estilo do Bloco 7, com um ajuste para o texto */}
                <a href="#bloco11" className="cta-button cta-duas-linhas">
                    <div>APROVEITE ESSA OFERTA ESPECIAL!</div>
                    <div className="texto-menor-botao">COMPRA AGORA</div>
                </a>
            </div>
        </section>
    );
};

export default Bloco11OfertaFinal;