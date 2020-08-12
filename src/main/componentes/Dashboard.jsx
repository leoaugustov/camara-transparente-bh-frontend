import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Secao from './Secao'
import TodosRankings from './TodosRankings'
import CusteioPorPartido from './CusteioPorPartido'
import TabelaVereadores from './TabelaVereadores'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons/'
import { formatoData } from '../formatos'

import buscarDados from '../buscaDados'

export default function Dashboard() {
    const [carregando, setCarregando] = useState([true])
    const [vereadores, setVereadores] = useState([])
    const [dataUltimaAtualizacao, setDataUltimaAtualizacao] = useState([])

    useEffect(() => {
        buscarDados('/status-scrap')
            .then(status => {
                setDataUltimaAtualizacao(new Date(status.dataUltimaAtualizacao))
            })
            .then(_ => buscarDados('/vereadores'))
            .then(setVereadores)
            .then(_ => setCarregando(false))
    }, [])

    function criarMensagemAtualizacaoDados() {
        if(carregando) {
            return null
        }

        return (
        <>
        <FontAwesomeIcon icon={ faCheckCircle } className="text-success"/> Atualizado em { formatoData.format(dataUltimaAtualizacao) }
        </>
        )
    }

    return (
    <>
    <Row className="text-secondary my-3">
        <Col xs={12}>Os dados trabalhados são os de Presença Mensal Consolidada e Custeio Parlamentar, 
            ambos disponibilizados na seção Transparência do 
            <a href="https://cmbh.mg.gov.br/" rel="noopener noreferrer" target="_blank" className="link ml-1">
            portal da Câmara Municipal de Belo Horizonte.
            </a>
        </Col>
        <Col xs={12}>Todas informações são referentes apenas ao último mandato 😉.</Col>
        <Col xs={12}>
            { criarMensagemAtualizacaoDados() }
        </Col>
    </Row>
    <Row className="text-secondary my-3">
        <Col>
        <FontAwesomeIcon icon={ faInfoCircle } className="text-primary"/> Segundo o portal da CMBH, 
        Custeio ou Custeio Parlamentar são os gastos com escritório, informática, serviços gráficos, divulgação da atividade 
        parlamentar, carimbos e material de copa.
        </Col>
    </Row>
    <TodosRankings  { ...{ vereadores, carregando } }/>
    <Secao titulo="Custeio Parlamentar por Partido">
        <CusteioPorPartido/>
    </Secao>
    <Secao titulo="Vereadores">
        <TabelaVereadores { ...{ vereadores, carregando } }/>
    </Secao>
    </>    
    )
}