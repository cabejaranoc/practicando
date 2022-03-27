import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import { Card } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';

function Header() {
    return (
        <div className='Header container'>
            <Card>
                <Card.Header className='blockquote text-center'>DIVERSION CON REACT</Card.Header>
                <Card.Body className='text-center'>
                    <Container>
                        <Row>
                            <Col>
                                <a href="/practicando/Cards" id="botonstart">START</a>
                            </Col>
                            <Col>
                                <a href="/practicando/Comojugar" id="Howplay" className='sm'>HELP</a>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Header;