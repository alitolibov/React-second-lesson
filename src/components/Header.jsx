import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <header>
            <div className="beens-block">
                <div className="beens"></div>
                <Link to="/" className="btns">Coffee house</Link>
            </div>
            <Link to="/components/Pagetwo" className="btns">Our coffee</Link>
            <p className="btns">For your pleasure</p>
        </header>
     );
}
 
export default Header;