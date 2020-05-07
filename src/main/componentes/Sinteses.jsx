import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Secao from './Secao'
import BlocoSinteseFrequenciaVereador from './BlocoSinteseFrequenciaVereador'

export default function Sinteses({ vereadores }) {
    const [maioresFrequencias, setMaioresFrequencias] = useState([])
    const [menoresFrequencias, setMenoresFrequencias] = useState([])

    useEffect(() => {
        const tamanhoSintese = 3
        const vereadoresOrdenadosPorFrequenciaAsc = vereadores.slice().sort(ordenarFrequenciaAsc)
        
        setMenoresFrequencias(vereadoresOrdenadosPorFrequenciaAsc.slice(0, tamanhoSintese))
        setMaioresFrequencias(vereadoresOrdenadosPorFrequenciaAsc
            .slice(vereadoresOrdenadosPorFrequenciaAsc.length - tamanhoSintese)
            .reverse()
        )
    }, [vereadores])

    function ordenarFrequenciaAsc(a, b) {
        return a.estatisticasPresencas.frequencia - b.estatisticasPresencas.frequencia
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
    </>
    )
}    