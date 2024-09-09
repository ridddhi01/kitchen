// import React, { useState } from "react";
// import Menu from "./Menu";
// import Categories from "./Categories";
// import items from "./data";
// import logo from "./logo.JPG";
// import KhichdiList from "./MenuList";

// // Menulist
// const allCategories = ["all", ...new Set(items.map((item) => item.category))];

// const App = () => {
//   const [menuItems, setMenuItems] = useState(items);
//   const [activeCategory, setActiveCategory] = useState("");
//   const [categories, setCategories] = useState(allCategories);

//   const filterItems = (category) => {
//     setActiveCategory(category);
//     if (category === "all") {
//       setMenuItems(items);
//       return;
//     }
//     const newItems = items.filter((item) => item.category === category);
//     setMenuItems(newItems);
//   };
//   return (
//     <main>
//       <section className="menu section">
//         <div className="title">
//           <img src={logo} alt="logo" className="logo" />
//           <h2>Menu List</h2>
//           <div className="underline"></div>
//         </div>
//         <Categories
//           categories={categories}
//           activeCategory={activeCategory}
//           filterItems={filterItems}
//         />
//         <Menu items={menuItems} />
//       </section>
//     </main>
//   );
// };

// export default App;

// DispatchedList
// import React from 'react';
// import './App.css';
// import DispatchedList from './dispatch/DispatchedList';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <DispatchedList />
//       </header>
//     </div>
//   );
// }

// export default App;

// deliverdlist
import React from 'react';
import './input.css';
import MyOrders from './Deliver/DeliveredList'; // Assuming DeliveredList.js is in the same directory

function App() {
    return (
        <div className="App">
            <MyOrders />
        </div>
    );
}

export default App;

