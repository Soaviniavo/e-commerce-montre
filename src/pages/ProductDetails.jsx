import { ArrowBigLeft, ArrowLeftCircle, ShoppingCart } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../features/cart/CartSlice"; 
import NotFound from "../components/NotFound";

function ProductDetails() {
  const { id } = useParams();
  const product = useSelector((state) => state.product.items.find((p) => p.id === parseInt(id)));
  const dispatch = useDispatch();

  if (!product) {
    return <NotFound message="Product Not Found"/>
  }

  return (
    <div className="container mx-auto  py-8 px-4 md:px-40 ">
      <Link to="/" className="font-semibold text-gray-700 mb-9 flex gap-3  w-[200px] ">
        <ArrowLeftCircle color="orange" /> Back to products
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2  items-center md:mb-20 gap-8 md:gap-20">
        <div className="shadow-md rounded-xl flex items-center justify-center">
          <img
            src={product.image}
            className="rounded-xl w-full md:w-3/3 "
            alt={product.title}
          />
        </div>
        <div >
          <h1 className="text-xl md:text-3xl text-gray-800 font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="mb-6">
            <span className="text-xl md:text-3xl text-gray-800 font-bold">${product.price}</span>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold  mb-2">Category :</h3>
            <span className="inline-block bg-orange-300 rounded-full px-3 py-1 text-sm">
              {product.category}
            </span>
          </div>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-zinc-200 w-full md:w-auto px-8 py-3 rounded-md flex items-center justify-center gap-3 hover:bg-zinc-400 active:scale-105 transition-all ease-in cursor-pointer "
          >
            <ShoppingCart /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
