import React from 'react'
import { Link, useLocation } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/'

export default function PerfilVereador() {
    const { state: vereador } = useLocation();

    return (
    <>
    <Link to="/">
        <Button variant="primary" className="shadow mt-1 mb-3 px-3">
            <FontAwesomeIcon icon={ faArrowLeft } className="mr-1"/>
            Voltar
        </Button>
    </Link>        
    <Card className="shadow mb-3">
        <Card.Body>
            <Row>
                <Col>
                Perfil do Vereador { vereador.nome }
                </Col>
            </Row>
        </Card.Body>
    </Card>
    </>
    )
}