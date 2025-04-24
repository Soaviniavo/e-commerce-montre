import { ArrowBigLeft, ArrowLeftCircle, ShoppingCart } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const product = useSelector((state) => state.product.items.find((p) => p.id === parseInt(id)));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 my-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/" className="text-blue-500 hover:text-blue-800">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto  py-8 px-4 md:px-40 ">
        <Link to="/" className="mb-9 flex gap-3  w-[200px] ">
          <ArrowLeftCircle color="orange"/> Back to products
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2  items-center md:mb-20 gap-8 md:gap-20">
          <div className="shadow-md rounded flex items-center justify-center">
            <img src={product.image} className=" rounded-lg w-full md:w-2/3 md:py-8 " alt={product.title} />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <div className="mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Category :</h3>
              <span className="inline-block bg-orange-300 rounded-full px-3 py-1 text-sm">{product.category}</span>
            </div>
            <button className="bg-zinc-200 w-full md:w-auto px-8 py-3 rounded-md flex items-center justify-center gap-3 hover:bg-zinc-300 ">
              <ShoppingCart /> Add to cart
            </button>
          </div>
        </div>
    </div>
  );
}

export default ProductDetails;
