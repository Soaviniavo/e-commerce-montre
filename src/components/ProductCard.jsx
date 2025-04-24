import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="w-72 shadow-lg cursor-pointer">
        <div className="flex justify-center h-52 py-4">
          <img src={product.image} className=" rounded-lg" alt={product.title} />
        </div>
        <div className="bg-gray-50 p-4">
          <h2 className="text-lg font-semibold my-1">{product.title}</h2>
          <p className="text-sm text-zinc-500 border-b-1 border-orange-500 pb-4">
            {product.description.substring(0, 70) + "..."}
          </p>
          <div className="flex justify-between mt-4 items-center">
            <p className="text-xl font-semibold">${product.price}</p>
            <p>View Details</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
