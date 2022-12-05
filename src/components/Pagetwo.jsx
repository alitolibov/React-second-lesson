import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Itemgrid from './_childs/Itemgrid';

const Pagetwo = (props) => {
    const Itemss = () => {
        return props.data.map(item => <Itemgrid item={item} />)
    }
    return ( 
        <div className="bigwrap">
            <Header/>
            <div className="container">
            <div className="twotop">
                <div className="twoleft">
                    <p className="looking">Lookiing for</p>
                    <input type="text" placeholder='start typing here...'/>
                </div>
                <div className="tworight">
                    <p className="filter">Or filter</p>
                    <div className="wrap">
                        <button className="twobtn">Brazil</button>
                        <button className="twobtn">Kenya</button>
                        <button className="twobtn">Columbia</button>
                    </div>
                </div>
            </div>
            <div className="two-grid">
                <Itemss/>
            </div>
            <Footer/>
        </div>
        </div>
     );
}
 
export default Pagetwo;