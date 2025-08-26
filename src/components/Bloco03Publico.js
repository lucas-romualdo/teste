import React from 'react';

const Bloco03Publico = () => {
    return (
        <section id="bloco3">
            <div className="container">
                <h2>Mas afinal, quem realmente pode se beneficiar com esse conhecimento estratégico?</h2>
                <p>Veja para quem o Manual Buy-Side é essencial:</p>

                {/* Trocamos a lista <ul> por uma estrutura mais flexível */}
                <div className="audience-grid">
                    <div className="audience-item">
                        <h3><span className="icon">🌞</span> Empresas de integração solar</h3>
                        <p>Para vender valor, fugir da guerra dos preços e fechar mais projetos.</p>
                    </div>
                    <div className="audience-item">
                        <h3><span className="icon">🚀</span> Empreendedores iniciantes na integração solar</h3>
                        <p>Para construir um negócio sólido desde o primeiro passo.</p>
                    </div>
                    <div className="audience-item">
                        <h3><span className="icon">💼</span> Representantes comerciais de sistema solar</h3>
                        <p>Para aumentar sua taxa de conversão reduzindo sua taxa de desconto.</p>
                    </div>
                    <div className="audience-item">
                        <h3><span className="icon">🎯</span> Agências de marketing</h3>
                        <p>Para gerar leads qualificados com um público informado.</p>
                    </div>
                    <div className="audience-item">
                        <h3><span className="icon">🏭</span> Fabricantes de equipamentos</h3>
                        <p>Para compreender a importância da visibilidade da marca para o consumidor final.</p>
                    </div>
                    <div className="audience-item">
                        <h3><span className="icon">🚚</span> Distribuidoras de kit fotovoltaico</h3>
                        <p>Para garantir a preferência do cliente final.</p>
                    </div>
                    <div className="audience-item">
                        <h3><span className="icon">💳</span> Instituições financeiras</h3>
                        <p>Para captar com maior eficiência clientes qualificados.</p>
                    </div>
                </div>

                {/* Parágrafo final adicionado */}
                <p className="conclusion-text">
                    Não importa em qual ponto da cadeia você está — o Manual Solar Buy-Side não é apenas um guia, mas uma <strong>imersão completa na perspectiva do comprador.</strong>
                </p>
            </div>
        </section>
    );
};

export default Bloco03Publico;