import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../features/cart/CartSlice";
import { Minus, Plus, Trash2 } from "lucide-react";

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div key={item.id} className="flex flex-col md:flex-row items-center gap-7 py-2 border-b border-gray-400">
      <Link to={`/product/${item.id}`}>
        <img src={item.image} alt={item.title} className="w-3/3 h-24 md:object-cover md:w-24  rounded" />
      </Link>
      <div>
        <Link to={`/product/${item.id}`} className="font-semibold  ">
          {item.title}
        </Link>
        <p className="text-gray-600">${item.price}</p>
        <div className="flex items-center gap-5 mt-2">
          <button
            className="p-1 rounded-full hover:bg-gray-200 cursor-pointer"
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))
            }
          >
            <Minus size={15} />
          </button>
          <span className="font-semibold">{item.quantity}</span>
          <button
            className=" p-1 rounded-full hover:bg-gray-200 cursor-pointer"
            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
          >
            <Plus size={15} />
          </button>
          <div
            className="ml-2 text-red-300 hover:text-red-500 cursor-pointer"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            <Trash2 size={20} />
          </div>
        </div>
      </div>
      <div className="ml-2 md:ml-96">
        <p className="font-bold"> ${item.price * item.quantity}</p>
      </div>
    </div>
  );
}

export default CartItem;
