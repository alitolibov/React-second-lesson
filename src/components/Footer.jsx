import React from 'react';

const Footer = () => {
    return ( 
        <div className="footer-block">
            <footer>
                <div className="beens-block">
                    <div className="beens"></div>
                    <p className="btns">Coffee house</p>
                </div>
                <p className="btns">Our coffee</p>
                <p className="btns">For your pleasure</p>
            </footer>
            <img src="/icons/beens.svg" alt="" className='beensImg'/>
        </div>
     );
}
 
export default Footer;