import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import { Card } from 'react-bootstrap';

function Header() {
    return (
        <div className='Header container'>
            <Card>
                <Card.Header className='blockquote text-center'>DIVERSION CON REACT</Card.Header>
                <Card.Body className='text-center'>
                    <a href="/Cards" id="botonstart">START</a>
                    <a href="/Comojugar" id="Howplay" className='sm'>HOW TO PLAY</a>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Header;