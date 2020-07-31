import React, { useState, useRef, useEffect } from 'react'
import Chart from 'chart.js'
import Tabela from './Tabela'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AnimacaoCarregamento from './AnimacaoCarregamento'
import buscarDados from '../buscaDados'
import { formatoMonetario } from '../formatos'

import './CusteioPorPartido.css'

export default function CusteioPorPartido() {
    const [carregando, setCarregando] = useState([true])
    const canvasGrafico = useRef()
    const [, setGrafico] = useState([])
    const [partidos, setPartidos] = useState([])

    const colunasTabela = [{
        dataField: 'siglaPartido',
        text: 'Partido',
        formatter: (celula, linha) => {
            return (
                <div className="text-nowrap d-flex">
                    <div className="bloco-cor-legenda mr-2" style={ { backgroundColor: linha.cor } }/>
                    <span>{ linha.siglaPartido }</span>
                </div>
            )
        }
    }, {
        dataField: 'quantidadeVereadores',
        text: 'Quant. Vereadores'
    }, {
        dataField: 'custeio',
        text: 'Custeio Total',
        formatter: (celula, linha, indiceLinha, extra) => extra.formato.format(celula),
        formatExtraData: {formato: formatoMonetario}
    }]

    useEffect(() => {
        const opcoesGrafico = {
            responsive: true, 
            maintainAspectRatio: false,
            legend: { display: false },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        const partido = data.labels[tooltipItem.index]
                        const valor = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
                        
                        return `${partido}: ${formatoMonetario.format(valor)}`
                    }
                }
            }
        }

        buscarDados('/custeio-parlamentar/por-partido')
            .then(dados => dados.filter(dado => dado.custeio > 0))
            .then(ordenarCusteioDesc)
            .then(adicionarCores)
            .then(dados => {
                setCarregando(false)
                return dados
            })    
            .then(dados => {
                setGrafico(new Chart(canvasGrafico.current, {
                    type: 'doughnut',
                    data: estruturarDadosGrafico(dados),
                    options: opcoesGrafico
                }))

                return dados
            })
            .then(setPartidos)
    }, [])

    function ordenarCusteioDesc(dados) {
        return dados.sort((a, b) => b.custeio - a.custeio)
    }

    function adicionarCores(dados) {
        const cores = [
            'red',
            'indigo',
            'green',
            'orange',
            'pink',
            'blue',
            'lightgreen',
            'palevioletred',
            '#363F46',
            'lightblue',
            'lime',
            'brown',
            'purple',
            'cyan',
            'yellow',
            'grey',
            'teal',
            'coral'
        ]

        return dados.map((dado, indice) => ( {...dado, cor: cores[indice]} ))
    }

    function estruturarDadosGrafico(dados) {
        const labels = []
        const data = []
        const cores = []

        for(let dado of dados) {
            labels.push(dado.siglaPartido)
            data.push(dado.custeio)
            cores.push(dado.cor)
        }

        return { labels, datasets: [{ data, backgroundColor: cores }] }
    }

    return (
    <Card className="shadow mb-3">
        <Card.Body>
            <Row className={ carregando ? "justify-content-center" : "" }>
            { carregando 
                ? <AnimacaoCarregamento/>
                : <>
                <Col xs={12} lg={6} className="mb-3 mb-lg-0">
                    <div style={ { height: '300px' } }>
                        <canvas ref={ canvasGrafico }></canvas>
                    </div>
                </Col>
                <Col xs={12} lg={6}>
                    <Tabela 
                        colunaChave="siglaPartido" 
                        colunas={ colunasTabela } 
                        dados={ partidos } 
                        mensagemColecaoVazia="Nenhum partido encontrado..." 
                        classesCssElementoWrapper="altura-tabela-partidos"/>
                </Col>
                </>
            }
            </Row>
        </Card.Body>
    </Card>
    )
}