import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import "./style.css"

const Topo = () => {
    return (
        <header>
            <div className='limitar-secao'>
                <img src={Logo} alt='Logo da sorveteria' />

                <nav>
                    <Link className="link-topo" to="/">Home</Link>
                    <Link className="link-topo" to="/sabores">Sabores</Link>
                    <Link className="link-topo" to="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    )
}

export default Topo