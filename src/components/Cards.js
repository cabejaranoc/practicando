import React from 'react'
import './card.css'
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import imagen1 from '../assets/imagen 1.jpg'
import imagen2 from '../assets/imagen 2.jpg'
import imagen3 from '../assets/imagen 3.jpg'

function Cards(params) {
    return (
        <Container className='CCards'>
            <Button variant="primary mb-3 mt-3" href="/practicando/" title="Regresar">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                    <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z" />
                </svg> Home
            </Button>
            <Row>
                <Col>
                    <Card className='Cards'>
                        <Card.Img width={171} height={180} variant="top" src={imagen1} />
                        <Card.Body>
                            <Card.Title>Mundo 1</Card.Title>
                            <hr class="dropdown-divider" />
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" href='/index'>Ir al mundo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card className='Cards'>
                        <Card.Img width={171} height={180} variant="top" src={imagen2} />
                        <Card.Body>
                            <Card.Title>Mundo 2</Card.Title>
                            <hr class="dropdown-divider" />
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" href='/index'>Ir al mundo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card className='Cards'>
                        <Card.Img width={171} height={180} variant="top" src={imagen3} />
                        <Card.Body>
                            <Card.Title>Mundo 3</Card.Title>
                            <hr class="dropdown-divider" />
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" href='/index'>Ir al mundo</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Cards;