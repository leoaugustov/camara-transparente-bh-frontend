import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import FotoVereador from './FotoVereador'
import AnimacaoCarregamento from './AnimacaoCarregamento'
import { formatoMonetario } from '../formatos'

import './BlocoRankingCusteioVereador.css'

export default function BlocoRankingCusteioVereador({ vereador, carregando }) {
    return (
    <Card className="shadow mb-3">
        <Card.Body className={ "pt-2 pb-3 " + (carregando ? "d-flex justify-content-center" : "") }>
            { carregando 
                ? <AnimacaoCarregamento/>
                : <>
                <Row className="align-items-center justify-content-between">
                    <Col xs="auto">
                        <span className="custeio text-primary">
                            { formatoMonetario.format(vereador.custeioTotal) }
                        </span>
                        <div className="text-muted">
                            Maior em único mês: { formatoMonetario.format(vereador.maiorCusteioMensal) }
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col xs="auto" className="pr-0">
                        <FotoVereador linkFoto={ vereador.linkFoto } proporcao="0.424"/>
                    </Col>
                    <Col className="pl-2 text-truncate">
                        <span className="nome-vereador font-weight-bold">{ vereador.nome }</span>
                        <br></br>
                        <span className="text-muted">
                            { vereador.estatisticasPresencas.quantidadeExercicios } meses exercendo a função
                        </span>
                    </Col>
                </Row>
                </>
            }
        </Card.Body>
    </Card>
    )
}    