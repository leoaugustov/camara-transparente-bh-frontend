import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Secao from './Secao'
import BlocoSinteseFrequenciaVereador from './BlocoSinteseFrequenciaVereador'
import BlocoSinteseCusteioVereador from './BlocoSinteseCusteioVereador'

export default function Sinteses({ vereadores }) {
    const [menoresFrequencias, setMenoresFrequencias] = useState([])
    const [maioresFrequencias, setMaioresFrequencias] = useState([])
    const [maioresCusteiosTotais, setMaioresCusteiosTotais] = useState([])
    const [menoresCusteiosTotais, setMenoresCusteiosTotais] = useState([])

    useEffect(() => {
        const tamanhoSintese = 3

        const vereadoresOrdenadosPorFrequenciaAsc = vereadores.slice().sort(ordenarFrequenciaAsc)
        setMenoresFrequencias(vereadoresOrdenadosPorFrequenciaAsc.slice(0, tamanhoSintese))
        setMaioresFrequencias(vereadoresOrdenadosPorFrequenciaAsc
            .slice(vereadoresOrdenadosPorFrequenciaAsc.length - tamanhoSintese)
            .reverse()
        )

        const vereadoresOrdenadosPorCusteioTotalAsc = vereadores.slice().sort(ordenarCusteioTotalAsc)
        setMaioresCusteiosTotais(vereadoresOrdenadosPorCusteioTotalAsc
            .slice(vereadoresOrdenadosPorCusteioTotalAsc.length - tamanhoSintese)
            .reverse()
        )
        setMenoresCusteiosTotais(vereadoresOrdenadosPorCusteioTotalAsc.slice(0, tamanhoSintese))
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
                    <BlocoSinteseFrequenciaVereador vereador={ vereador }/>
                </Col>
            )) }
        </Row>
    </Secao>
    <Secao titulo="Melhores Frequências">
        <Row>
            { maioresFrequencias.map((vereador, indice) => (
                <Col key={ indice } xs={12} md={6} lg={4}>
                    <BlocoSinteseFrequenciaVereador vereador={ vereador }/>
                </Col>
            )) }
        </Row>
    </Secao>
    <Secao titulo="Maiores Custeios">
        <Row>
            { maioresCusteiosTotais.map((vereador, indice) => (
                <Col key={ indice } xs={12} md={6} lg={4}>
                    <BlocoSinteseCusteioVereador vereador={ vereador }/>
                </Col>
            )) }
        </Row>
    </Secao>
    <Secao titulo="Menores Custeios">
        <Row>
            { menoresCusteiosTotais.map((vereador, indice) => (
                    <Col key={ indice } xs={12} md={6} lg={4}>
                        <BlocoSinteseCusteioVereador vereador={ vereador }/>
                    </Col>
            )) }
        </Row>
    </Secao>
    </>
    )
}    