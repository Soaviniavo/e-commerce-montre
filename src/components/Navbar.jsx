import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import logo from "../assets/90365.jpg"
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/products/ProductSlice";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.product.searchTerm);

  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleUser = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="py-4 shadow-sm">
        <ul className="container mx-auto flex flew-wrap justify-between items-center px-4 md:px-20  ">
          <div className="flex gap-6 font-semibold text-gray-900">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>FAQs</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </div>
          <div
            className={`${
              isOpen
                ? "flex flex-col absolute right-10  top-13  bg-zinc-50 p-3 gap-3 md:right-38"
                : "hidden"
            }`}
          >
            <li>
              <Link to="/">Sign</Link>
            </li>
            <li>
              <Link to="/">My Account</Link>
            </li>
          </div>
          <User
            size={35}
            onClick={handleUser}
            className="bg-gray-200 p-2 text-black rounded cursor-pointer"
          />
        </ul>
      </div>
      <nav>
        <div className="flex justify-between items-center container mx-auto md:py-5 py-4 md:px-20 px-4">
          <Link to="/">
            <img src={logo} className="w-15 h-15 " />
          </Link>
          <form className="w-1/2 sm:block hidden">
            <input
              type="text"
              placeholder="Search Product..."
              className=" bg-zinc-100 text-gray-800 text-md rounded-md border border-zinc-200  focus:outline-none py-2 px-2 md:w-full "
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </form>
          <div className="relative">
            <Link to={"/cart"}>
              <ShoppingCart size={40} className="bg-gray-100  py-2 rounded-full" />
              {itemCount > 0 && (
                <span className="absolute rounded-full -top-2  -right-2.5  text-white text-[10px] w-5 h-5 bg-lime-500 flex items-center justify-center ">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
