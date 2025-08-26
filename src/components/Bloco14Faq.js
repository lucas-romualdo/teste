import React, { useState } from 'react';

// Colocamos os dados do FAQ em um array para facilitar a renderização
const faqData = [
    {
        question: "Como acesso meu produto?",
        answer: [
            "Você receberá o acesso ao Manual Solar Buy-Side por e-mail, por meio da plataforma online Eduzz. Esta plataforma atua como intermediadora digital entre clientes e produtores, disponibilizando conteúdos, soluções e ferramentas tecnológicas.",
            "O conteúdo será acessado de forma online na plataforma Eduzz, utilizando seu login e senha.",
            "Você poderá acessar o manual por meio de computador, celular, tablet ou outro dispositivo digital. No entanto, devido à formatação do manual em tamanho A4, recomendamos enfaticamente o uso de um computador ou tablet para uma experiência de leitura e aproveitamento mais otimizada do material."
        ]
    },
    {
        question: "Como funciona o \"Prazo de Garantia\" e a solicitação de devolução do pagamento?",
        answer: [
            "O reembolso de uma compra de um produto digital é um direito garantido pelo Código de Defesa do Consumidor (Lei nº 8.078, Artigo 49) e pode ser solicitado em até 7 dias a partir da data de assinatura ou do recebimento do produto."
        ]
    },
    {
        question: "Política de Devolução: Como proceder para o reembolso?",
        answer: [
            "Para formalizar o pedido de reembolso do valor despendido, o Comprador deverá remeter sua solicitação ao endereço eletrônico contato@buyside.com.br. A comunicação deverá conter, obrigatoriamente, o número de referência da transação e a exposição detalhada da(s) razão(ões) que fundamenta(m) o pleito de cancelamento.",
            "As condições para efetivação do reembolso pautam-se nas Regras Gerais estabelecidas pela plataforma Eduzz. Para informações adicionais e consulta integral às diretrizes aplicáveis, o Comprador poderá acessar o seguinte link: <a href='https://ajuda.eduzz.com/hc/pt-br/articles/34175176026523-Quais-s%C3%A3o-as-regras-gerais-de-reembolso-Eduzz' target='_blank' rel='noopener noreferrer'>https://ajuda.eduzz.com/...</a>"
        ]
    }
];

const Bloco14Faq = () => {
    // State para controlar qual item está aberto (pelo seu índice)
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (index) => {
        // Se o item clicado já está aberto, fecha ele. Senão, abre o novo.
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <section id="bloco14">
            <div className="container">
                <h2>FAQ</h2>
                <div className="faq-accordion">
                    {faqData.map((item, index) => (
                        <div className="faq-item" key={index}>
                            <div className="faq-question" onClick={() => toggleItem(index)}>
                                <h3>{item.question}</h3>
                                {/* O ícone muda dependendo se o item está aberto ou fechado */}
                                <span className={`faq-icon ${openItem === index ? 'open' : ''}`}>+</span>
                            </div>
                            <div className={`faq-answer ${openItem === index ? 'open' : ''}`}>
                                <div className="faq-answer-content">
                                    {item.answer.map((paragraph, pIndex) => (
                                        // Usamos dangerouslySetInnerHTML para renderizar a tag <a> do link
                                        <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bloco14Faq;