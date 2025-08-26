import React, { useState } from 'react';

// Dados para os 4 cards, com os depoimentos completos
const depoimentosData = [
    {
        nome: "Carlos",
        local: "Belo Horizonte - MG",
        resumo: "O manual Solar Buy-Side abriu meus olhos para os riscos!",
        completo: "Morando em Fortaleza, o sol é uma bênção, mas eu tinha medo de cair em cilada ao tentar aproveitar essa energia. As empresas prometiam mundos e fundos, mas eu sentia que tinha algo escondido. O manual abriu meus olhos para os riscos de contratos mal feitos e equipamentos de baixa qualidade. Com as dicas práticas, conversei de igual para igual com os fornecedores e ainda economizei R$ 1.800 na negociação! Valeu cada página pra fechar com uma empresa séria e garantir um sistema que atende minhas necessidades de verdade.",
        imagem: "/images/carlos.png"
    },
    {
        nome: "Ricardo S.",
        local: "São Paulo - SP",
        resumo: "Errar na escolha de um fornecedor pode gerar prejuízo enorme!",
        completo: "No mundo dos negócios em São Paulo, errar na escolha de um fornecedor pode gerar um prejuízo enorme. O manual foi uma ferramenta indispensável para evitar armadilhas na compra do sistema solar. Aprendi a identificar contratos malfeitos e equipamentos de qualidade duvidosa. O mais importante foi que o manual me ensinou a procurar empresas que não apenas vendiam o sistema, mas também ofereciam garantia de suporte técnico contínuo e manutenção. Fechei negócio com a melhor empresa e tenho certeza que meu investimento de R$ 145 mil foi muito bem aplicado. Evitei um monte de dor de cabeça e escolhi com confiança.",
        imagem: "/images/ricardo.png"
    },
    {
        nome: "Lucineide",
        local: "Recife - PE",
        resumo: "Esse manual foi realmente um passo a passo 'arretado!'",
        completo: "Morando sozinho, confesso que a enorme variedade de empresas e tecnologias de energia solar me deixava bastante perdido e inseguro sobre qual seria a escolha ideal para não me arrepender depois. Mas o manual foi um guia fundamental nessa jornada! Seguindo cada fase e etapa, consegui avaliar detalhadamente cada proposta, descartando aquelas que pareciam boas demais para ser verdade. Com segurança e convicção, instalei um sistema de R$ 28 mil. Esse manual foi realmente um passo a passo 'arretado' para entender tudo direitinho e fazer a escolha certa para minha casa. E o melhor de tudo? No final das negociações, fui até elogiado por vendedores, que nunca tinham encontrado uma mulher com tanto conhecimento no assunto!",
        imagem: "/images/recife.png"
    },
    {
        nome: "Edivaldo",
        local: "Sinop - MT",
        resumo: "O manual me deu segurança para investir R$ 248.000,00!",
        completo: "Sou produtor rural aqui em Sinop, no Mato Grosso, e decidi instalar um sistema solar no meu galpão por causa do alto consumo de energia nas atividades da fazenda, principalmente na irrigação e no uso de máquinas. Com o clima seco e a expansão da lavoura, a conta de luz estava pesando cada vez mais. O Manual de Compra Profissional de Sistema Solar Fotovoltaico Buy-Side foi essencial nesse processo. Ele me ajudou a entender como comparar propostas e evitar erros comuns, o que me deu segurança para investir R$ 248.000,00 com confiança.",
        imagem: "/images/edivaldo.png"
    }
];

const Bloco09Depoimentos = () => {
    const [flippedCard, setFlippedCard] = useState(-1);

    const handleFlip = (index) => {
        setFlippedCard(flippedCard === index ? -1 : index);
    };

    const handleButtonClick = (e) => {
        e.stopPropagation();
        alert("Lógica para tocar o áudio aqui!");
    };

    return (
        <section id="bloco9">
            <div className="container">
                <div className="bloco9-header">
                    <div className="header-selo">
                        <img src="/images/selo.png" alt="Selo +100 Compradores Usando o Manual Solar Buy-Side" />
                    </div>
                    <div className="header-texto">
                        <h2>Mais de 75 compradores de sistema já experimentaram o sucesso com o <strong>Manual Solar Buy-Side!</strong></h2>
                        <p>📍 Testado em mais de 14 estados do Brasil por clientes residenciais e empresariais.</p>
                        <p>🛡️ Criado por quem conhece o lado do comprador e do vendedor!</p>
                    </div>
                </div>
                <p className="subtitulo-teoria"><strong>Não é teoria. Veja o que dizem compradores que já aplicaram o Manual na prática!</strong></p>
                <div className="depoimento-destaque-layout">
                    <div className="destaque-imagem-col">
                        <img src="/images/rogerio.png" className="imagem-principal-depoimento" alt="Foto de Rogério de Campinas" />
                    </div>
                    <div className="destaque-texto-col">
                        <button className="btn-ouvir-depoimento">
                            <img src="/images/ouvir-depoimento-icon.png" alt="Ouvir depoimento" />
                            <span>OUÇA O DEPOIMENTO</span>
                        </button>
                        <h3>Rogério – (Campinas)</h3>
                        <h4 className="quote-destaque">Sem exagero: o manual valeu cada página!</h4>
                        <p>Nunca tinha tido contato com energia solar e tinha receio de tomar decisão errada. Mas, ao começar a ler o manual, tudo mudou. O conteúdo é claro, estruturado e me conquistou logo no início.</p>
                        <p>As 4 fases da jornada de compra foram essenciais. Sempre que surgia uma dúvida, o índice interativo com mais de 160 tópicos me levava direto à resposta. No fim, escolhi a empresa certa, o sistema ideal ao preço certo e conduzi tudo com segurança. <strong>Sem exagero: o manual valeu cada página.</strong></p>
                    </div>
                </div>
                <p className="frase-cada-sorriso">Cada sorriso conta uma experiencia. Clique nas fotos e veja como o manual fez a diferença.</p>
                <div className="depoimentos-grid">
                    {depoimentosData.map((depoimento, index) => (
                        <div key={index} className="flip-card" onClick={() => handleFlip(index)}>
                            <div className={`flip-card-inner ${flippedCard === index ? 'is-flipped' : ''}`}>
                                <div className="flip-card-front">
                                    <img src={depoimento.imagem} alt={`Foto de ${depoimento.nome}`} className="card-frente-imagem" />
                                    <div className="card-frente-conteudo">
                                        <p className="resumo-depoimento">"{depoimento.resumo}"</p>
                                        <div className="autor-info">
                                            <h4>{depoimento.nome}</h4>
                                            <span>{depoimento.local}</span>
                                        </div>
                                        <div className="btn-ouvir-depoimento-card" onClick={handleButtonClick}>
                                            <img src="/images/ouvir-depoimento-icon.png" alt="Ouvir" />
                                            <span>OUÇA O DEPOIMENTO</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <h4>Depoimento de {depoimento.nome}</h4>
                                    <p className="depoimento-completo">{depoimento.completo}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a href="#bloco11" className="cta-button">QUERO APRENDER O BUY-SIDE!</a>
            </div>
        </section>
    );
};

export default Bloco09Depoimentos;