import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Secao from './componentes/Secao'
import TodosRankings from './componentes/TodosRankings'
import CusteioPorPartido from './componentes/CusteioPorPartido'
import TabelaVereadores from './componentes/TabelaVereadores'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons/'
import { faGithub } from '@fortawesome/free-brands-svg-icons/'
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
            <Col xs={12} lg={4}>
                <FontAwesomeIcon icon={ faCheckCircle } className="text-success"/> Atualizado em { formatoData.format(dataUltimaAtualizacao) }
            </Col>
        </Row>
        <Row className="text-secondary my-3">
            <Col>
            <FontAwesomeIcon icon={ faInfoCircle } className="text-primary"/> Segundo o site da Câmara Municipal de Belo Horizonte, 
            Custeio ou Custeio Parlamentar são os gastos com escritório, informática, serviços gráficos, divulgação da atividade 
            parlamentar, carimbos e material de copa.
            </Col>
        </Row>
        <TodosRankings  vereadores={ vereadores }/>
        <Secao titulo="Custeio Parlamentar por Partido">
            <CusteioPorPartido/>
        </Secao>
        <Secao titulo="Vereadores">
            <TabelaVereadores vereadores={ vereadores }/>
        </Secao>
        <Row className="autoria text-secondary mt-5">
            <Col className="d-flex justify-content-center align-items-center">
            Criado e mantido por 
            <a href="https://github.com/leoaugustov/" rel="author noopener noreferrer" target="_blank" className="link-autor ml-1">
                leoaugustov <FontAwesomeIcon icon={ faGithub } />
            </a>
            </Col>
        </Row>   
    </Container>
    </>  
    );
}