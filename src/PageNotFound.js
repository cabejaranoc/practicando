import React from 'react'
import { Button } from 'react-bootstrap';

function PageNotFound(params) {

    const estilo = {
        color: 'black'
    }
    return(
        <>
        <h1 className='mb-5' style={estilo}>404 Page Not Found</h1>
        <Button variant="outline-danger" href="/">GO BACK HOME</Button>
        </>
    );
}

export default PageNotFound;