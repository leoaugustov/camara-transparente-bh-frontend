import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './PaginaNaoEncontrada.css'

export default () => {
    return (
        <Container className="pt-2">
            <Card className="shadow mb-3">
                <Card.Body>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <h1 className="PaginaNaoEncontrada-titulo text-primary">404</h1>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="d-flex justify-content-center align-items-center">
                            <h2 className="PaginaNaoEncontrada-subtitulo text-muted">
                                A página que você procura não existe <span role="img" aria-label="rosto triste">🙁</span>
                            </h2>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col className="d-flex justify-content-center align-items-center">
                            <Link to="/">
                                <Button className="shadow mt-1 mb-3 px-3">
                                    Ir pra o início
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}    