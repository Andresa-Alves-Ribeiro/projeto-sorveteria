import React from 'react'
import "./style.css"
import Topo from '../../components/Topo'
import Rodape from '../../components/Rodape'
import SaborOreo from "../../assets/sabor-oreo.png"
import SaborPistache from "../../assets/sabor-pistache.png"
import SaborCookies from "../../assets/sabor-cookies-avela.png"
import SaborKiwi from "../../assets/sabor-kiwi.png"
import SaborMorango from "../../assets/sabor-morango.png"
import SaborLimao from "../../assets/sabor-limao.png"

const Sabores = () => {
    return (
        <div>
            <Topo />

            <main>
                <section className="banner-sabores">
                    <div className="texto-banner-sabores">
                        <h1>NOSSOS SABORES</h1>
                    </div>
                </section>

                <section className="limitar-secao secao-sabores">
                    <h2>SABORES DE SORVETE</h2>
                    <div className="container-sorvetes">

                        <div className='card-sabores'>
                            <img src={SaborOreo} alt='Terceiro banner da página Home com varias pessoas segurando um sorvete de casquinha' />
                            <h2>Sorvete de Oreo</h2>
                            <p>Delicioso sorvete sabor oreo. Uma explosão de sabor!</p>
                        </div>

                        <div className='card-sabores'>
                            <img src={SaborPistache} alt='Terceiro banner da página Home com varias pessoas segurando um sorvete de casquinha' />
                            <h2>Sorvete de Pistache</h2>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente!</p>
                        </div>

                        <div className='card-sabores'>
                            <img src={SaborCookies} alt='Terceiro banner da página Home com varias pessoas segurando um sorvete de casquinha' />
                            <h2>Sorvete de Cookies & Avelã</h2>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor!</p>
                        </div>

                        <div className='card-sabores'>
                            <img src={SaborKiwi} alt='Terceiro banner da página Home com varias pessoas segurando um sorvete de casquinha' />
                            <h2>Sorvete de Kiwi</h2>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C!</p>
                        </div>

                        <div className='card-sabores'>
                            <img src={SaborMorango} alt='Terceiro banner da página Home com varias pessoas segurando um sorvete de casquinha' />
                            <h2>Sorvete de Morango</h2>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso!</p>
                        </div>

                        <div className='card-sabores'>
                            <img src={SaborLimao} alt='Terceiro banner da página Home com varias pessoas segurando um sorvete de casquinha' />
                            <h2>Sorvete de Limão</h2>
                            <p>Incrível sorvete gourmet de limão siciliano vai te encantar!</p>
                        </div>
                    </div>
                </section>
            </main>

            <Rodape />
        </div>
    )
}

export default Sabores