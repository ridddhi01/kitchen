import logo from './logo.svg';
import ProductList from './ProductListR';
import './App.css';
import './input.css';
import KhichdiList from './MenuList';
 

function App() {
  return (
    <ProductList/>
  )
}

export default App;

// src/App.js
// import React from 'react';
// import './App.css';
// import './input.css';

// function App() {
//   const restaurants = [
//     {
//       name: "Domino's Pizza",
//       rating: 3.7,
//       deliveryTime: '20-25 mins',
//       offer: '₹150 OFF ABOVE...',
//       imageUrl: 'path-to-dominos-image', // Replace with the actual image path
//       description: 'Pizzas, Italian, Pastas',
//       location: 'Kurla West',
//     },
//     {
//       name: 'Daily Kitchen – Homely...',
//       rating: 4.4,
//       deliveryTime: '20-30 mins',
//       offer: '30% OFF UPTO ₹75',
//       imageUrl: 'path-to-daily-kitchen-image',
//       description: 'Home Food, Indian, North...',
//       location: 'Kurla West',
//     },
//     // Add more restaurant objects similar to the above
//   ];

//   return (
//     <div className="app">
//       <header className="header">
//         <div className="filters">
//           <button>Fast Delivery</button>
//           <button>Ratings 4.0+</button>
//           <button>Pure Veg</button>
//           <button>Offers</button>
//           <button>Rs. 300-Rs. 600</button>
//           <button>Less than Rs. 300</button>
//         </div>
//       </header>
//       <main className="restaurant-grid">
//         {restaurants.map((restaurant, index) => (
//           <div className="restaurant-card" key={index}>
//             <img src={restaurant.imageUrl} alt={restaurant.name} />
//             <div className="restaurant-info">
//               <h3>{restaurant.name}</h3>
//               <p>{restaurant.description}</p>
//               <p>{restaurant.location}</p>
//               <p>⭐ {restaurant.rating} • {restaurant.deliveryTime}</p>
//               <p className="offer">{restaurant.offer}</p>
//             </div>
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// }

// export default App;
