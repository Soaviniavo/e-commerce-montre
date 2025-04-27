import React from "react";
import logo from "../assets/90365.jpg";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../features/products/ProductSlice";
function Footer() {
  const categories = ["Luxury", "Sport", "Classic", "Automatic"];
  const dispatch = useDispatch();
  
  return (
    <footer className="bg-slate-900 shadow-md">
      <div className="container md:px-20 px-4 ">
        <div className="min-h-16">
          <div className="flex justify-between items-center flex-col md:flex-row py-10">
            <h2 className="text-4xl font-bold text-white">Subscribe to our Newsletter</h2>
            <form action="" className="w-full mt-8 relative md:mt-0 md:w-1/3 ">
              <input
                type="text"
                placeholder="Enter your email..."
                className="bg-zinc-100 text-gray-800 text-md py-3 px-4 rounded shadow-md w-full focus:outline-none"
              />
              <button className=" bg-orange-300 py-3 px-4 rounded absolute right-0 ">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 text-white py-8">
        <div className="container mx-auto md:px-20 px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-10">
            <div>
              <img src={logo} alt="logo" className="mb-4 w-20 h-20 rounded" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ipsam.</p>
              <div className="flex items-center mt-4 gap-8">
                <Facebook
                  size={35}
                  className="bg-white text-slate-900 rounded-md p-1 cursor-pointer"
                />
                <Youtube
                  size={35}
                  className="bg-white text-slate-900 rounded-md p-1 cursor-pointer"
                />
                <Instagram
                  size={35}
                  className="bg-white text-slate-900 rounded-md p-1 cursor-pointer"
                />
                <Twitter
                  size={35}
                  className="bg-white text-slate-900 rounded-md p-1 cursor-pointer"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Pages</h2>
              <ul>
                <li>
                  <Link className="hover:underline">Home</Link>
                </li>
                <li>
                  <Link className="hover:underline">About</Link>
                </li>
                <li>
                  <Link className="hover:underline">FAQs</Link>
                </li>
                <li>
                  <Link className="hover:underline">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Categories</h2>
              <ul>
                {categories.map((category) => {
                  return (
                    <li  key={category} onClick={() => dispatch(setSelectedCategory(category))}>
                      <Link className="hover:underline">{category}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Contact Info</h2>
              <p>
                Email : <a href="mailto:exemple@email.com">SaaV@email.com</a>
              </p>
              <p>
                Téléphone : <a href="tel:+33123456789">+261 1 23 45 67 89</a>
              </p>
              <p>Adresse : Itaosy Antananarivo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center text-white py-1">
        <p>Copyright &copy; 2025 Soaviniavo</p>
      </div>
    </footer>
  );
}

export default Footer;
