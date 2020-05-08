import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Secao from './componentes/Secao'
import Sinteses from './componentes/Sinteses'
import CusteioPorPartido from './componentes/CusteioPorPartido'
import TabelaVereadores from './componentes/TabelaVereadores'

import './App.css'
import icone from '../imagens/icone.png'

export default function App() {
    const formatoData = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })

    const [vereadores, setVereadores] = useState([])
    const [dataUltimaAtualizacao, setDataUltimaAtualizacao] = useState([])

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

        fetch('http://localhost:8080/api/status-scrap')
            .then(resposta => resposta.json())
            .then(status => {
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