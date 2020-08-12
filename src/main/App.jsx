import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Rodape from './componentes/Rodape'
import Routes from './routes'

import icone from '../assets/icone-principal.png'
import './App.css'

export default () => {
    return (
    <Router>
        <Container fluid className="conteudo">
            <div className="barra-superior fixed-top border-bottom shadow-sm d-flex justify-content-center align-items-center">
                <span className="font-weight-bold">câmara</span>
                <span className="font-weight-bold text-primary">transparente</span>
                <img src={ icone } alt="Logo" width="50" height="49" className="ml-2"/>
            </div>
            <Routes/>
            <Rodape/>
        </Container>
    </Router>
    )
}