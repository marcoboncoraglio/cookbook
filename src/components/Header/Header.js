import React from 'react';
import './Header.css';
import { Jumbotron } from 'react-bootstrap';
const Header = () => {
    return(
        <Jumbotron className="text-center">
            <h1>Welcome to the Cook Book</h1>
            <p>Find recipies!</p>
        </Jumbotron>
    );
}

export default Header;