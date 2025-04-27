import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleUser = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 shadow-sm">
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
              ? "flex flex-col absolute right-14  top-13  bg-zinc-50 p-3 gap-3 md:right-38"
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
    </nav>
  );
}

export default Navbar;
