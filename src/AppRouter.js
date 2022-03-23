import React from 'react'
import {
    Route,
    Routes
} from "react-router-dom";
import Cards from './components/Cards';
import Comojugar from './components/Como_jugar';
import Header from './Header';
import PageNotFound from './PageNotFound';


function AppRouter() {
    return (
        <Routes>
            <Route path='/' exact element={<Header />}></Route>
            <Route path='/Cards' exact element={<Cards />}></Route>
            <Route path='Comojugar' exact element={<Comojugar />}></Route>
            <Route path='*' exact element={<PageNotFound />}></Route>
        </Routes>
    );
}

export default AppRouter;