import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Secao from './Secao'
import BlocoRankingFrequenciaVereador from './BlocoRankingFrequenciaVereador'
import BlocoRankingCusteioVereador from './BlocoRankingCusteioVereador'

export default function TodosRankings({ vereadores, carregando }) {
    const TAMANHO_RANKING = 3

    const [menoresFrequencias, setMenoresFrequencias] = useState([])
    const [maioresFrequencias, setMaioresFrequencias] = useState([])
    const [maioresCusteiosTotais, setMaioresCusteiosTotais] = useState([])
    const [menoresCusteiosTotais, setMenoresCusteiosTotais] = useState([])

    useEffect(() => {
        const vereadoresOrdenadosPorFrequenciaAsc = vereadores.slice().sort(ordenarFrequenciaAsc)
        setMenoresFrequencias(vereadoresOrdenadosPorFrequenciaAsc.slice(0, TAMANHO_RANKING))
        setMaioresFrequencias(vereadoresOrdenadosPorFrequenciaAsc
            .slice(vereadoresOrdenadosPorFrequenciaAsc.length - TAMANHO_RANKING)
            .reverse()
        )

        const vereadoresOrdenadosPorCusteioTotalAsc = vereadores.slice().sort(ordenarCusteioTotalAsc)
        setMaioresCusteiosTotais(vereadoresOrdenadosPorCusteioTotalAsc
            .slice(vereadoresOrdenadosPorCusteioTotalAsc.length - TAMANHO_RANKING)
            .reverse()
        )
        setMenoresCusteiosTotais(vereadoresOrdenadosPorCusteioTotalAsc.slice(0, TAMANHO_RANKING))
    }, [vereadores])

    function ordenarFrequenciaAsc(a, b) {
        return a.estatisticasPresencas.frequencia - b.estatisticasPresencas.frequencia
    }

    function ordenarCusteioTotalAsc(a, b) {
        return a.custeioTotal - b.custeioTotal
    }

    function criarSecao(titulo, criarBlocoRanking) {
        return (
            <Secao titulo={ titulo }>
                <Row>
                { [...Array(TAMANHO_RANKING).keys()].map(indice => (
                    <Col key={ indice } xs={12} md={6} lg={4}>
                        { criarBlocoRanking(indice) }
                    </Col>
                )) }
                </Row>
            </Secao>    
        )
    }

    return (
    <>
    { criarSecao("Piores Frequências", indice => (
        <BlocoRankingFrequenciaVereador vereador={ menoresFrequencias[indice] } carregando={ carregando }/>
    )) }

    { criarSecao("Melhores Frequências", indice => (
        <BlocoRankingFrequenciaVereador vereador={ maioresFrequencias[indice] } carregando={ carregando }/>
    )) }

    { criarSecao("Maiores Custeios", indice => (
        <BlocoRankingCusteioVereador vereador={ maioresCusteiosTotais[indice] } carregando={ carregando }/>
    )) }

    { criarSecao("Menores Custeios", indice => (
        <BlocoRankingCusteioVereador vereador={ menoresCusteiosTotais[indice] } carregando={ carregando }/>
    )) }
    </>
    )
}    