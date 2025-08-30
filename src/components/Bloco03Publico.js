import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Bloco03Publico = () => {
    const settings = {
        dots: false, // Alterado de true para false
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false // Também alterado aqui para telas menores
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false // E aqui também
                }
            }
        ]
    };

    const audienceData = [
        { icon: "🌞", title: "Empresas de integração solar", description: "Para vender valor, fugir da guerra dos preços e fechar mais projetos." },
        { icon: "🚀", title: "Empreendedores iniciantes na integração solar", description: "Para construir um negócio sólido desde o primeiro passo." },
        { icon: "💼", title: "Representantes comerciais de sistema solar", description: "Para aumentar sua taxa de conversão reduzindo sua taxa de desconto." },
        { icon: "🎯", title: "Agências de marketing", description: "Para gerar leads qualificados com um público informado." },
        { icon: "🏭", title: "Fabricantes de equipamentos", description: "Para compreender a importância da visibilidade da marca para o consumidor final." },
        { icon: "🚚", title: "Distribuidoras de kit fotovoltaico", description: "Para garantir a preferência do cliente final." },
        { icon: "💳", title: "Instituições financeiras", description: "Para captar com maior eficiência clientes qualificados." }
    ];

    return (
        <section id="bloco3">
            <div className="container">
                <h2>Mas afinal, quem realmente pode se beneficiar com esse conhecimento estratégico?</h2>
                <p>Veja para quem o Manual Buy-Side é essencial:</p>

                <Slider {...settings}>
                    {audienceData.map((audience, index) => (
                        <div key={index} className="audience-item-wrapper">
                            <div className="audience-item">
                                <h3><span className="icon">{audience.icon}</span> {audience.title}</h3>
                                <p>{audience.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>

                <p className="conclusion-text">
                    Não importa em qual ponto da cadeia você está — o Manual Solar Buy-Side não é apenas um guia, mas uma <strong>imersão completa na perspectiva do comprador.</strong>
                </p>
            </div>
        </section>
    );
};

export default Bloco03Publico;