import React from 'react'
import './Comojugar.css'
import avatar from '../assets/avatar_1.jpg'
import frutas from '../assets/frutas.jpg'
import enemigos from '../assets/enemigos.jpg'
import preguntas from '../assets/avisos.jpg'
import { Container, Button, Accordion, Figure } from 'react-bootstrap';

function Comojugar(params) {
    return (
        <div className='CJApp'>
            <Container id='contenedorP' className='container mt-5'>
                <Button variant="primary mb-3" href="/practicando/" title="Regresar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                        <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z" />
                    </svg> Home
                </Button>{' '}
                <h1 className='text-center'>¿Cómo Jugar?</h1>
                <hr class="dropdown-divider" />
                <Container className='intro'>
                    <h5 className='text-decoration-underline'>Intro</h5>
                    <p className='mt-3 lh-lg'>Bienvenid@ a Diversión Con React,
                        en este apartado encontrarás información sobre como manejar tu avatar
                        (con qué teclas), las puntuaciones y de más.</p>

                    <p>¿Estás list@? Comencemos...</p>
                </Container>


                <hr class="dropdown-divider" />
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Manejo de Avatar</Accordion.Header>
                        <Accordion.Body>
                            <Figure className='Figuritas'>
                                <Figure.Image
                                    width={500}
                                    height={500}
                                    alt="Avatar"
                                    src={avatar}
                                />
                            </Figure>
                            <p>
                                Dentro de los mundos te vas a encontrar con el avatar, 
                                este será tu participador en el juego, y por ello debes
                                aprender a manejarlo
                            </p>
                            <p>
                                Como se muestra en la figura: para avanzar emplearás la flecha hacia
                                la derecha y para retroceder la flecha hacia la izquierda de tu teclado
                            </p>
                            <p>
                                Para saltar y lograr pasar los obstaculos de cada mundo, es necesario que oprimas
                                la tecla espaciadora de tu teclado
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Recoje las frutas</Accordion.Header>
                        <Accordion.Body>
                            <Figure className='Figuritas'>
                                <Figure.Image
                                    width={500}
                                    height={500}
                                    alt="Frutas"
                                    src={frutas}
                                />
                            </Figure>
                            <p>
                                Dentro de cada mundo tambien encontrarás frutas, estos manjares te ayudarán en tu expedición,
                                através de la acumulación de puntos. Ve por ellas y situate como uno de los expertos
                            </p>
                            <p>
                                Recuerda que las frutas te dan puntos, lo que equivale a experiencia, entre más frutas, más 
                                experiencia
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>¡Cuidado con los enemigos!</Accordion.Header>
                        <Accordion.Body>
                            <Figure className='Figuritas'>
                                <Figure.Image
                                    width={500}
                                    height={500}
                                    alt="Enemigos"
                                    src={enemigos}
                                />
                            </Figure>
                            <p>
                                No todo es tan fácil, durante tu recorrido por los mundos encontrarás
                                enemigos muy peligrosos, lo mejor es que vayas con cuidado y no toques a ninguno
                                de ellos
                            </p>
                            <p>
                                Las trampas también son muy mortales, debes tener cuidado con ellas, Recuerda: ve despacio 
                                y permanece atento
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Resuelve las preguntas</Accordion.Header>
                        <Accordion.Body>
                            <Figure className='Figuritas'>
                                <Figure.Image
                                    width={500}
                                    height={500}
                                    alt="Avisos"
                                    src={preguntas}
                                />
                            </Figure>
                            <p>
                                Para pasar de un mundo a otro necesitas resolver las preguntas,
                                estas pueden ser muy fáciles, pero requieren de tu concentración
                            </p>
                            <p>
                                ¡Resuelve las preguntas y avanza de nivel!
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
}

export default Comojugar;