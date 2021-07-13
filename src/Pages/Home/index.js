import React from 'react';
import { Link } from 'react-router-dom';


const Page = () => {
    return (
        <div>
            <h1>Pagina inicial!!!</h1>
            <br/>
            <Link to="/about">Sobre</Link>
        </div>   
    );
}

export default Page;