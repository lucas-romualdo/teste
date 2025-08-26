import React from 'react';

// Dados da tabela para facilitar a renderização
const buyerSkillsData = [
    {
        skill: "Conceitos essenciais para uma compra técnica e segura",
        result: "Capacidade de analisar propostas com critérios técnicos"
    },
    {
        skill: "Reconhecimento de marcas e distribuidores de alta confiança",
        result: "Avaliação precisa da reputação e do suporte pós-venda"
    },
    {
        skill: "Critérios para selecionar empresas sérias e competentes",
        result: "Tomada de decisão com segurança e embasamento técnico"
    }
];

const Bloco08Comprador = () => {
    return (
        <section id="bloco8">
            <div className="container">
                <h2>E se você ainda duvida do que está em jogo, veja o que seus clientes aprenderão em breve</h2>
                <p>Você está preparado para continuar vendendo para esse novo perfil de comprador?</p>

                {/* Nova estrutura de Grid */}
                <div className="results-grid">
                    {/* Cabeçalho do Grid */}
                    <div className="grid-header">
                        <div className="header-item">O QUE O COMPRADOR VAI DOMINAR</div>
                        <div className="header-item">PRINCIPAIS FOCO E HABILIDADES</div>
                    </div>

                    {/* Corpo do Grid */}
                    <div className="grid-body">
                        {buyerSkillsData.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="grid-cell">{item.skill}</div>
                                <div className="grid-cell">{item.result}</div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bloco08Comprador;