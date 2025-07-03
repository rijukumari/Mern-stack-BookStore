import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate("/buy", { state: { item } });
  };

  return (
    <div className="mt-4 my-3 w-full sm:w-full md:w-full lg:w-full px-2">
      <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200">
        <figure>
          <img
            src={item.image}
            alt="Book"
            className="w-full h-48 object-cover rounded-t"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-semibold">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="text-sm text-gray-600">{item.title}</p>
          <div className="card-actions flex justify-between items-center mt-4">
            <div className="badge badge-outline text-sm">${item.price}</div>
            <button
              onClick={handleBuy}
              className="cursor-pointer badge badge-outline rounded-full hover:bg-pink-500 hover:text-white duration-200 px-4 py-4"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
