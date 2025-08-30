import React from 'react';

// Dados da tabela para facilitar a renderização
const benefitsData = [
    {
        skill: "Compreender profundamente as dores, objeções e motivações do cliente",
        result: "Apresentações mais persuasivas e personalizadas"
    },
    {
        skill: "Adotar uma postura mais consultiva, transparente e centrada na realidade do cliente",
        result: "Mais confiança, conexão e autoridade no processo de venda"
    },
    {
        skill: "Demonstrar com clareza o valor técnico e econômico da solução",
        result: "Aumento da taxa de conversão e menor dependência de desconto"
    }
];

const Bloco05Resultados = () => {
    return (
        <section id="bloco5-e-6-combinados">

            <div className="container">
                <h2>Mas o que essa imersão representa na prática para o seu dia a dia como vendedor?</h2>
                <p>Veja os resultados concretos que você pode alcançar ao aplicar o Manual Solar Buy-Side no seu processo de venda.</p>

                {/* Estrutura da Tabela de Resultados */}
                <div className="results-grid">
                   {/* Cabeçalho do Grid */}
                    <div className="grid-header">
                        <div className="header-item">O QUE O COMPRADOR VAI DOMINAR</div>
                        <div className="header-item">PRINCIPAIS FOCO E HABILIDADES</div>
                    </div>
                
                    <div className="grid-body">
                        {benefitsData.map((benefit, index) => (
                            <React.Fragment key={index}>
                                <div className="grid-cell">{benefit.skill}</div>
                                <div className="grid-cell">{benefit.result}</div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* --- Seção do Depoimento do Rodrigo Adicionada Abaixo --- */}

                <div className="testimonial-grid">
                    <div className="testimonial-image">
                        <img src="/images/rodrigo-sp.png" alt="Rodrigo, integrador de SP" />
                    </div>
                    <div className="testimonial-content">
                        <p>Os beneficios são claros, e a prática comprova. Veja a experiencia de Rodrigo, integrador de SP:</p>
                        <blockquote>"Minha maior dor era a concorrência acirrada e a baixa conversão. O Manual Buy-Side foi um divisor de águas: em um mês, fechei 5 sistemas a mais! "</blockquote>
                        <p><strong>Faça como ele: Imersão no Manual de Compra Solar Buy-Side: pensa como seu cliente e torne-se um Vendedor de Alta Performance!</strong></p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Bloco05Resultados;