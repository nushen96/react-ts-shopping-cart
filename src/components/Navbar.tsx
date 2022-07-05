import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";

export function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleActiveLink = (linkName: string) => {
    setActiveLink(linkName);
  };
  return (
    <div className="sticky top-0 flex flex-row items-center justify-between bg-white shadow-sm mb-3 px-3 py-3">
      <nav>
        <div className={`flex space-x-4`}>
          <NavLink
            className={`${
              activeLink === "Home" ? "text-gray-600" : "text-gray-300"
            }`}
            to="/"
            onClick={() => setActiveLink("Home")}
          >
            Home
          </NavLink>
          <NavLink
            className={`${
              activeLink === "Store" ? "text-gray-600" : "text-gray-300"
            }`}
            to="/store"
            onClick={() => setActiveLink("Store")}
          >
            Store
          </NavLink>
          <NavLink
            className={`${
              activeLink === "About" ? "text-gray-600" : "text-gray-300"
            }`}
            to="/about"
            onClick={() => setActiveLink("About")}
          >
            About
          </NavLink>
        </div>
      </nav>
      <button className="rounded-full border border-blue-300 p-3 hover:bg-blue-300 relative">
        <FaShoppingBasket />
        <div className="rounded-full bg-red-500 flex items-center h-5 w-5 justify-center text-white absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-xs">
          2
        </div>
      </button>
    </div>
  );
}
