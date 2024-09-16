// StoreLocator.jsx
import React from "react";

const StoreLocator = () => {
  const stores = Array(8).fill({
    name: "Store Name",
    address: "Subham Square Complex, Ligh 8/1, Municipal No.4-12-1, Piduguralla- 522413",
    contact: "9294838493",
    directions: "#",
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-red-600 p-4 text-white flex justify-between items-center">
        <h1 className="text-lg font-bold">Find a Store</h1>
        <div className="flex space-x-4">
          <select className="p-2 bg-white text-black rounded">
            <option>Select State</option>
          </select>
          <select className="p-2 bg-white text-black rounded">
            <option>Select District</option>
          </select>
          <input
            type="text"
            placeholder="Search Store by Location"
            className="p-2 rounded border"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {stores.map((store, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">{store.name}</h2>
            <p className="text-sm mt-2">{store.address}</p>
            <p className="text-sm mt-2">
              <span className="font-semibold">Contact:</span> {store.contact}
            </p>
            <a href={store.directions} className="text-red-600 mt-2 inline-block">
              Get Directions
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreLocator;
