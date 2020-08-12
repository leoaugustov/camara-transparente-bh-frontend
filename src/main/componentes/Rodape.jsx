import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/'

export default () => {
    return (
    <Row className="autoria text-secondary mt-5">
        <Col className="d-flex justify-content-center align-items-center">
        Criado e mantido por 
        <a href="https://github.com/leoaugustov/" rel="author noopener noreferrer" target="_blank" className="link ml-1">
            leoaugustov <FontAwesomeIcon icon={ faGithub } />
        </a>
        </Col>
    </Row>
    )
}