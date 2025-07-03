import React from "react";
import { Link, useLocation } from "react-router-dom";

function Buypage() {
  const location = useLocation();
  const item = location.state?.item;

  if (!item) {
    return (
      <div className="text-center text-red-600 text-xl mt-20">
        ❌ No book data found.
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-12 flex flex-col md:flex-row items-start gap-10 mt-48">
      <div className="md:w-1/2">
        <img
          src={item.image}
          alt={item.title}
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>

      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">{item.name}</h2>
        <p className="text-gray-600 mb-2"> {item.title}</p>
         <div className="badge badge-secondary">{item.category}</div>
        <p className="text-2xl font-semibold text-pink-600 mb-6">
          ₹{item.price}
        </p>
        <button
          onClick={() => alert("Redirecting to payment...")}
          className="bg-pink-500 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded shadow"
        >
          Buy Now
        </button>
        <Link to='/'
          className="bg-pink-500 ml-4 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded shadow"
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default Buypage;
