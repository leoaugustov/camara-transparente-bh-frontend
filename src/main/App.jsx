import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import TabelaVereadores from './componentes/TabelaVereadores'

import './App.css'

export default function App() {
    return (
        <>
        <div className="barra-superior texto-lg fixed-top border-bottom shadow-sm d-flex justify-content-center align-items-center">
            <span className="font-weight-bold">câmara</span>
            <span className="font-weight-bold text-info">transparenteBH</span>
        </div>
        <Container className="conteudo">
            <Row className="text-secondary">
                <Col>Todas informações são referentes apenas ao último mandato.</Col>
            </Row>
            <Card className="shadow mb-3">
                <Card.Header className="font-weight-bold texto-md">Vereadores</Card.Header>
                <Card.Body className="p-0">
                    <TabelaVereadores/>
                </Card.Body>
            </Card>
        </Container>
        </>  
    );
}