import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { formatoPorcentagem } from '../formatos'

import './BlocoSinteseFrequenciaVereador.css'

export default function BlocoSinteseFrequenciaVereador({ vereador }) {
    return (
    <Card className="shadow mb-3">
        <Card.Body className="pt-2 pb-3">
        <Row className="align-items-center justify-content-between">
                <Col xs="auto">
                    <span className="frequencia text-primary">
                        { formatoPorcentagem.format(vereador.estatisticasPresencas.frequencia) }
                    </span>
                </Col>
                <Col xs="auto" className="text-muted">
                    <div>
                        Presenças: { vereador.estatisticasPresencas.presencas }
                    </div>
                    <div>
                        Ausências: { vereador.estatisticasPresencas.totalAusencias }
                    </div>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col xs="auto" className="pr-0">
                    <img src = { vereador.linkFoto } alt="Foto do vereador" width="50" height="59" className="rounded p-0"/>
                </Col>
                <Col className="pl-2 pr-0 text-truncate">
                    <span className="nome-vereador font-weight-bold">{ vereador.nome }</span>
                    <div className="text-muted">
                        { vereador.estatisticasPresencas.quantidadeExercicios } meses em exercício da função
                    </div>
                </Col>
            </Row>
        </Card.Body>
    </Card>
    )
}