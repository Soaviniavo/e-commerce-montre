import React from "react";
import ProductGrid from "../components/ProductGrid";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../features/products/ProductSlice";
const categories = ["All", "Phone", "Montre", "laptop", "Monitor"];

function Home() {
  const dispatch = useDispatch();
  
  return (
    <>
      <div className="bg"></div>
      <div className="container mx-auto my-7 md:px-20 px-4">
        <div className="flex flex-wrap gap-4">
          {categories.map((categorie) => {
            return (
              <button
                key={categorie}
                className="bg-gray-300 py-2 px-4 rounded-md text-black hover:bg-zinc-400 active:scale-105 transition-all ease-in"
                onClick={ () =>dispatch(setSelectedCategory(categorie))}
              >
                {categorie}
              </button>
            );
          })}
        </div>
        <ProductGrid />
      </div>
    </>
  );
}

export default Home;
