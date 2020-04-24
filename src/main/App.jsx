import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TabelaVereadores from './componentes/TabelaVereadores'

import './App.css'

export default function App() {
    const [vereadores, setVereadores] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/vereadores')
            .then(resposta => resposta.json())
            .then(vereadores => setVereadores(vereadores))
    }, [])

    return (
        <>
        <div className="barra-superior fixed-top border-bottom shadow-sm d-flex justify-content-center align-items-center">
            <span className="font-weight-bold">câmara</span>
            <span className="font-weight-bold text-info">transparenteBH</span>
        </div>
        <Container className="conteudo">
            <Row className="text-secondary">
                <Col>Todas informações são referentes apenas ao último mandato.</Col>
            </Row>
            <TabelaVereadores vereadores={ vereadores }/>
        </Container>
        </>  
    );
}