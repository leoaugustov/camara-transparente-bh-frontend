import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CusteioPorPartido from './componentes/CusteioPorPartido'
import TabelaVereadores from './componentes/TabelaVereadores'

import './App.css'
import icone from '../imagens/icone.png'

export default function App() {
    const [vereadores, setVereadores] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/vereadores')
            .then(resposta => resposta.json())
            .then(async vereadores => {
                for(let vereador of vereadores) {
                    const resposta = await fetch(`http://localhost:8080/api/vereadores/${vereador.id}/foto`)
                    const dados = await resposta.json()

                    vereador.foto = 'data:image/png;base64,' +dados.foto
                }

                return vereadores
            })
            .then(setVereadores)
    }, [])

    return (
        <>
        <div className="barra-superior fixed-top border-bottom shadow-sm d-flex justify-content-center align-items-center">
            <span className="font-weight-bold">câmara</span>
            <span className="font-weight-bold text-primary">transparente</span>
            <img src={ icone } alt="Logo" width="50" height="49" className="ml-2"/>
        </div>
        <Container fluid className="conteudo">
            <Row className="text-secondary">
                <Col>Todas informações são referentes apenas ao último mandato.</Col>
            </Row>
            <CusteioPorPartido/>
            <TabelaVereadores vereadores={ vereadores }/>
        </Container>
        </>  
    );
}