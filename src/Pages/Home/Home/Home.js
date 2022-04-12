import React, { useEffect, useState } from 'react';
import Room from './Room/Room';
import './Home.css'
const Home = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch('hotel.json')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    return (
        <div>
            <h2>Our Rooms</h2>
            <div className='room-container'>
                {
                    rooms.map(room => <Room key={room.id} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default Home;