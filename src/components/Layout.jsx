import React from "react";
import { ShoppingCart } from "lucide-react";
import logo from "../assets/90365.jpg";
import { setSearchTerm } from "../features/products/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.product.searchTerm);

  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <>
      <header className="bg-white shadow-sm">
        <Navbar />
        <div>
          <div className="flex justify-between items-center container mx-auto md:py-5 py-4 md:px-20 px-4">
            <Link to="/">
              <img src={logo} className="w-10 h-10 md:w-15 md:h-15 " />
            </Link>
            <form className="w-1/2  mr-10 md:mr-0 ">
              <input
                type="text"
                placeholder="Search Product..."
                className=" bg-zinc-100 text-gray-800 text-md rounded-md border border-zinc-200  focus:outline-none py-2 px-2 w-[210px]  md:w-full  "
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
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
