import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Secao from './Secao'
import BlocoRankingFrequenciaVereador from './BlocoRankingFrequenciaVereador'
import BlocoRankingCusteioVereador from './BlocoRankingCusteioVereador'

export default function TodosRankings({ vereadores }) {
    const [menoresFrequencias, setMenoresFrequencias] = useState([])
    const [maioresFrequencias, setMaioresFrequencias] = useState([])
    const [maioresCusteiosTotais, setMaioresCusteiosTotais] = useState([])
    const [menoresCusteiosTotais, setMenoresCusteiosTotais] = useState([])

    useEffect(() => {
        const tamanhoRanking = 3

        const vereadoresOrdenadosPorFrequenciaAsc = vereadores.slice().sort(ordenarFrequenciaAsc)
        setMenoresFrequencias(vereadoresOrdenadosPorFrequenciaAsc.slice(0, tamanhoRanking))
        setMaioresFrequencias(vereadoresOrdenadosPorFrequenciaAsc
            .slice(vereadoresOrdenadosPorFrequenciaAsc.length - tamanhoRanking)
            .reverse()
        )

        const vereadoresOrdenadosPorCusteioTotalAsc = vereadores.slice().sort(ordenarCusteioTotalAsc)
        setMaioresCusteiosTotais(vereadoresOrdenadosPorCusteioTotalAsc
            .slice(vereadoresOrdenadosPorCusteioTotalAsc.length - tamanhoRanking)
            .reverse()
        )
        setMenoresCusteiosTotais(vereadoresOrdenadosPorCusteioTotalAsc.slice(0, tamanhoRanking))
    }, [vereadores])

    function ordenarFrequenciaAsc(a, b) {
        return a.estatisticasPresencas.frequencia - b.estatisticasPresencas.frequencia
    }

    function ordenarCusteioTotalAsc(a, b) {
        return a.custeioTotal - b.custeioTotal
    }

    return (
    <>
    <Secao titulo="Piores Frequências">
        <Row>
            { menoresFrequencias.map((vereador, indice) => (
                <Col key={ indice } xs={12} md={6} lg={4}>
                    <BlocoRankingFrequenciaVereador vereador={ vereador }/>
                </Col>
            )) }
        </Row>
    </Secao>
    <Secao titulo="Melhores Frequências">
        <Row>
            { maioresFrequencias.map((vereador, indice) => (
                <Col key={ indice } xs={12} md={6} lg={4}>
                    <BlocoRankingFrequenciaVereador vereador={ vereador }/>
                </Col>
            )) }
        </Row>
    </Secao>
    <Secao titulo="Maiores Custeios">
        <Row>
            { maioresCusteiosTotais.map((vereador, indice) => (
                <Col key={ indice } xs={12} md={6} lg={4}>
                    <BlocoRankingCusteioVereador vereador={ vereador }/>
                </Col>
            )) }
        </Row>
    </Secao>
    <Secao titulo="Menores Custeios">
        <Row>
            { menoresCusteiosTotais.map((vereador, indice) => (
                    <Col key={ indice } xs={12} md={6} lg={4}>
                        <BlocoRankingCusteioVereador vereador={ vereador }/>
                    </Col>
            )) }
        </Row>
    </Secao>
    </>
    )
}    