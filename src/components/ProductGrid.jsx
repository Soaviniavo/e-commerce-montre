import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";


function ProductGrid() {
  const Products = useSelector((state) => state.product.filteredItems);
  if (Products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 mt-40 mb-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Product Found !</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-7">
      { Products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })
      }
    </div>
  );
}

export default ProductGrid;
