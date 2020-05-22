import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Secao from './componentes/Secao'
import Sinteses from './componentes/Sinteses'
import CusteioPorPartido from './componentes/CusteioPorPartido'
import TabelaVereadores from './componentes/TabelaVereadores'
import buscarDados from './buscaDados'
import { formatoData } from './formatos'

import './App.css'
import icone from '../assets/icone-principal.png'

export default function App() {
    const [vereadores, setVereadores] = useState([])
    const [dataUltimaAtualizacao, setDataUltimaAtualizacao] = useState([])

    useEffect(() => {
        buscarDados('/vereadores').then(setVereadores)

        buscarDados('/status-scrap').then(status => {
            setDataUltimaAtualizacao(new Date(status.dataUltimaAtualizacao))
        })
    }, [])

    return (
    <>
    <div className="barra-superior fixed-top border-bottom shadow-sm d-flex justify-content-center align-items-center">
        <span className="font-weight-bold">câmara</span>
        <span className="font-weight-bold text-primary">transparente</span>
        <img src={ icone } alt="Logo" width="50" height="49" className="ml-2"/>
    </div>
    <Container fluid className="conteudo">
        <Row className="text-secondary my-3">
            <Col xs={12} lg={8}>Todas informações são referentes apenas ao último mandato 😉.</Col>
            <Col xs={12} lg={4}>☑️ Atualizado em { formatoData.format(dataUltimaAtualizacao) }</Col>
        </Row>
        <Sinteses vereadores={ vereadores }/>
        <Secao titulo="Custeio Parlamentar por Partido">
            <CusteioPorPartido/>
        </Secao>
        <Secao titulo="Vereadores">
            <TabelaVereadores vereadores={ vereadores }/>
        </Secao>    
    </Container>
    </>  
    );
}