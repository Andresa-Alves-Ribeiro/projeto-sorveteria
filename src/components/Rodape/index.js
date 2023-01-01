import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import "./style.css"

const Rodape = () => {
    return (
        <footer>
            <section className=' limitar-secao container-informacoes'>
                <img src={Logo} alt='Logo da loja' />

                <div>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>

                <div>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>(11) 3456-7890</p>
                </div>

                <div>
                    <h3>HORÁRIO</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </section>

            <section className='limitar-secao secao-dev'>
                Gelateria. Orgulhosamente desenvolvido por <a href='https://www.linkedin.com/in/andresa-alves-ribeiro/' target="_blank">Andresa A. Ribeiro</a>
            </section>
        </footer>
    )
}

export default Rodape