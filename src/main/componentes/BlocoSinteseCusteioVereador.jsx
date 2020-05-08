import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import './BlocoSinteseCusteioVereador.css'

export default function BlocoSinteseCusteioVereador({ vereador }) {
    const formatoMonetario = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})

    return (
        <Card className="shadow mb-3">
        <Card.Body className="pt-2 pb-3">
        <Row className="align-items-center justify-content-between">
                <Col xs="auto">
                    <span className="custeio text-primary">
                        { formatoMonetario.format(vereador.custeioTotal) }
                    </span>
                    <div className="texto-informativo text-muted">
                        Maior em único mês: { formatoMonetario.format(vereador.maiorCusteioMensal) }
                    </div>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col xs="auto" className="pr-0">
                    <img src = { vereador.linkFoto } alt="Foto do vereador" width="50" height="59" className="rounded p-0"/>
                </Col>
                <Col className="pl-2 pr-0 text-truncate">
                    <span className="nome-vereador font-weight-bold">{ vereador.nome }</span>
                </Col>
            </Row>
        </Card.Body>
    </Card>
    )
}    