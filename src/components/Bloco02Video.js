import React from 'react';

const Bloco02Video = () => {
    return (
        <section id="bloco2">
            <div className="container">
                {/* O título foi atualizado para corresponder à referência */}
                <h2>Descubra agora o que o manual revela aos compradores de sistema solar e como você pode usar esse conhecimento a seu favor!</h2>

                {/* A lista agora tem classes e ícones para estilização */}
                <ul className="lista-beneficios">
                    <li>
                        <span className="icone-lista icone-alerta">⚠️</span>
                        Os 3 grandes RISCOS ao comprar um sistema Solar.
                    </li>
                    <li>
                        <span className="icone-lista icone-check">✅</span>
                        A importância de se tornar um comprador informado.
                    </li>
                    <li>
                        <span className="icone-lista icone-check">✅</span>
                        A força de uma jornada de compra bem planejada.
                    </li>
                </ul>

                {/* Adicionada a chamada para o vídeo */}
                <p className="chamada-video">
                    🎥 Assista (3min): Veja por que o comprador pode dominar o jogo
                </p>

                {/* A imagem do vídeo foi movida para o final, como na referência */}
                <img
                    src="/images/video-thumb.jpg"
                    alt="Vídeo sobre os 3 riscos na compra de um sistema solar"
                    style={{ maxWidth: '600px', cursor: 'pointer', margin: '20px auto' }}
                />
            </div>
        </section>
    );
};

export default Bloco02Video;