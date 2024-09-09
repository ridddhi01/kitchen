import React from "react";

const MyOrders = () => {
  const orders = [
    {
      id: 26,
      type: "Delivery",
      date: "18 Jan 2023 15:24",
      item: "Non Veg Loaded",
      quantity: 1,
      price: 222,
      status: "DELIVERED",
    },
    {
      id: 27,
      type: "Delivery",
      date: "20 Jan 2023 12:45",
      item: "Veggie Delight",
      quantity: 2,
      price: 340,
      status: "DELIVERED",
    },
    {
      id: 28,
      type: "Dine-In",
      date: "25 Jan 2023 19:30",
      item: "Chicken Special",
      quantity: 1,
      price: 275,
      status: "DELIVERED",
    },
  ];

  return (
    <div className="p-4">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {["All", "Favourite", "Delivery", "In progress"].map(
          (filter) => (
            <button
              key={filter}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none"
            >
              {filter}
            </button>
          )
        )}
      </div>

      {/* Orders List */}
      {orders.map((order) => (
        <div
          key={order.id}
          className="w-full p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          <div className="flex justify-between mb-2">
            <div>
              <h2 className="text-sm font-semibold text-gray-700">{order.type}</h2>
              <p className="text-xs text-gray-500">Order #{order.id}</p>
              <p className="text-xs text-gray-500">{order.date}</p>
            </div>
            <div>
              <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                {order.status}
              </span>
            </div>
          </div>

          <div className="mb-2">
            {/* Item and Quantity moved above price */}
            <div className="text-sm text-gray-700">
              <p className="flex items-center">
                <span className="mr-2">🍽️</span>
                <span>{order.item}</span>
              </p>
              <p className="text-xs text-gray-500">Quantity: {order.quantity}</p>
            </div>
          </div>
          
          <div className="text-2xl font-semibold text-gray-700 mb-4">
            {/* Price moved to left */}
            ₹{order.price}
          </div>

          <div className="mt-4t text-right">
            {/* Reorder button aligned to right */}
            <button className="px-2 py-2 top-4 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none">
              Reorder
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
