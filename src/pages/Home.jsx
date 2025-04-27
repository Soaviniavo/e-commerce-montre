import React from "react";
import ProductGrid from "../components/ProductGrid";
import bg_image from "../assets/boite-montre.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../features/products/ProductSlice";
const categories = [
  "All",
  "Men",
  "Women",
  "Kids",
  "Smart",
  "Luxury",
  "Sport",
  "Classic",
  "Automatic",
  "Quartz",
];

function Home() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.product.selectedCategory);

  return (
    <>
      <div className="">
        <img src={bg_image} alt="" />
      </div>
      <div className="container mx-auto my-7 md:px-20 px-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((categorie) => {
            return (
              <button
                key={categorie}
                className={
                  categorie !== selectedCategory
                    ? "bg-gray-300 text-xs md:text-sm py-2 px-4 rounded-md text-black cursor-pointer hover:bg-zinc-400 active:scale-105 transition-all ease-in"
                    : "bg-lime-300 text-xs md:text-sm py-2 px-4 rounded-md text-black cursor-pointer hover:bg-lime-500 active:scale-105 transition-all ease-in"
                }
                onClick={() => dispatch(setSelectedCategory(categorie))}
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
