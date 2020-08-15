import React, { useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FotoVereador from './FotoVereador'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/'
import { formatoPorcentagem, formatoMonetario } from '../formatos'

import './PerfilVereador.css'

export default function PerfilVereador() {
    const history = useHistory();
    const { state: vereador } = useLocation();

    useEffect(() => {
        if(vereador) {
            const tituloPrincipal = document.title.split('|')[1] || document.title
            document.title = `${vereador.nome} | ${tituloPrincipal}`
        }else {
            
        }
    }, [vereador])

    return (
    <Container>
        <Button className="shadow mt-1 mb-3 px-3" onClick={ () => history.goBack() }>
            <FontAwesomeIcon icon={ faArrowLeft } className="mr-1"/>
            Voltar
        </Button>
        <h1 className="text-primary PerfilVereador-nome-vereador">{ vereador.nome }</h1>
        <Card className="shadow mb-3">
            <Card.Body>
                <Row className="mt-2">
                    <Col xs={12} className="d-flex justify-content-center mx-auto">
                        <Row>
                            <Col xs="auto" className="mx-auto">
                                <FotoVereador linkFoto={ vereador.linkFoto } proporcao="1" classesCss="PerfilVereador-foto-vereador mb-3"/>
                            </Col>
                            <Col xs="auto" className="text-muted d-flex flex-column">
                                <div>
                                    { vereador.estatisticasPresencas.quantidadeExercicios } meses exercendo a função
                                </div>
                                <div className="flex-grow-1">
                                    Partido: { vereador.partido }
                                </div>
                                <div className="pb-2">
                                    Mais informações no
                                    <a href={ vereador.perfilCmbh } rel="noopener noreferrer" target="_blank" className="link ml-1">
                                        perfil do vereador no portal da CMBH
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>    
                <Row className="mt-3">
                    <Col lg={6}>
                        <Row>
                            <Col xs={12} className="text-primary PerfilVereador-coluna-conteudo-destacado">
                                <span className="PerfilVereador-texto-em-destaque">Frequência de </span>
                                <span className="PerfilVereador-valor-em-destaque">
                                    { formatoPorcentagem.format(vereador.estatisticasPresencas.frequencia) }
                                </span>
                            </Col>
                            <Col xs={12} className="text-muted">
                                <div>
                                    { vereador.estatisticasPresencas.presencas } presenças
                                </div>
                                <div>
                                    { vereador.estatisticasPresencas.faltas } faltas
                                </div>
                                <div>
                                    { vereador.estatisticasPresencas.ausenciasJustificadas } ausências justificadas
                                </div>
                                <div>
                                    { vereador.estatisticasPresencas.licencasNaoRemuneradas } licenças não remuneradas
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} className="text-primary PerfilVereador-coluna-conteudo-destacado mt-lg-0 mt-3">
                        <span className="PerfilVereador-texto-em-destaque">Custeio total de </span>
                        <span className="PerfilVereador-valor-em-destaque">
                            { formatoMonetario.format(vereador.custeioTotal) }
                        </span>
                        <div className="text-muted">
                            Maior custeio em único mês: { formatoMonetario.format(vereador.maiorCusteioMensal) }
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Container>
    )
}