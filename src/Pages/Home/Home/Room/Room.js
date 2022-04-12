import React from 'react';
import './Room.css'

const Room = ({ room }) => {
    const { img, name, price } = room
    return (
        <div className='room'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <button className='book-now-btn'>Book Now</button>

        </div>
    );
};

export default Room;