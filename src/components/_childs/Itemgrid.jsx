import React from 'react';

const Itemgrid = ({item}) => {

    return (
        <div className='two-gridblock' >
            <img src={`/images/${item.img}`} alt="" />
            <p className="twotext">AROMISTICO Coffee 1kg</p>
            <p className="twotext">{item.title}</p>
            <p className="twoprice">{item.price}$</p>
        </div>
    );
};


export default Itemgrid;