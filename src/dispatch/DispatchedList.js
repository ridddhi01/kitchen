import React from 'react';
import './DispatchedList.css'; // Optional, create if needed

const DispatchedList = () => {
    const dispatchedData = [
        { 
            id: 'ORD12345', 
            destination: 'New York, USA', 
            date: '2024-09-06', 
            status: 'In Transit', 
            image: 'https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&resize=556,5050', 
            alt: 'Package to New York', 
            description: 'Description' 
        },
        { 
            id: 'ORD12346', 
            destination: 'Los Angeles, USA', 
            date: '2024-09-05', 
            status: 'Delivered', 
            image: 'https://food.fnr.sndimg.com/content/dam/images/food/plus/fullset/2020/04/30/0/FNK_The-Best-Cheddar-And-Herb-Chaffle_H_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1588257306685.jpeg', 
            alt: 'Package delivered to Los Angeles', 
            description: 'Description'
        },
        { 
            id: 'ORD12347', 
            destination: 'Chicago, USA', 
            date: '2024-09-04', 
            status: 'Pending', 
            image: 'https://popmenucloud.com/cdn-cgi/image/width%3D600%2Cheight%3D600%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/blscvmeh/ddc2e761-1f8e-4588-8204-bca34495dc24.jpg', 
            alt: 'Pending package to Chicago', 
            description: 'Description.'
        },
        { 
            id: 'ORD12348', 
            destination: 'Houston, USA', 
            date: '2024-09-03', 
            status: 'In Transit', 
            image: 'https://www.kateskitchenkc.com/wp-content/uploads/2022/12/breakfast-served-with-coffee-juice-egg-and-rolls.jpg_s1024x1024wisk20c81oJyNsUEkDZzX8Qf4kEuj3pnxPHHA5MLVeRzPEr-vQ.jpg', 
            alt: 'Package in transit to Houston', 
            description: 'Description.'
        },
        { 
            id: 'ORD12349', 
            destination: 'Phoenix, USA', 
            date: '2024-09-02', 
            status: 'Delivered', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQHgsK-nwTekxOpmlqnI4f3iaI2lddF8g0DQ&s', 
            alt: 'Package delivered to Phoenix', 
            description: 'Description.'
        },
    ];

    return (
        <div className="dispatched-container">
            <h1 className="title">Dispatched List</h1>
            <table className="dispatched-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Destination</th>
                        <th>Dispatch Date</th>
                        <th>Status</th>
                        <th>Image & Description</th>
                    </tr>
                </thead>
                <tbody>
                    {dispatchedData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.destination}</td>
                            <td>{item.date}</td>
                            <td>
                                <span className={`status ${item.status.toLowerCase().replace(' ', '-')}`}>
                                    {item.status}
                                </span>
                            </td>
                            <td>
                                <a href={item.image} target="_blank" rel="noopener noreferrer">
                                    <img src={item.image} alt={item.alt} className="item-image" />
                                </a>
                                <p className="item-description">{item.description}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DispatchedList;
