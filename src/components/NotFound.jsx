import React from "react";
import { Link } from "react-router-dom";


function NotFound({ message }) {
  return (
    <div className="container mx-auto px-4 py-8 my-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{message}</h2>
        <Link to="/" className="text-blue-500 hover:text-blue-800">
          Return to home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
