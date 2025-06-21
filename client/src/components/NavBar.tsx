// src/components/Navbar.js
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import DarkModeToggle from "./DarkModeToggle";
import { logo, navbarLinks, dropdownItems } from "../constants";

const Navbar = () => {
  return (
    <div className="relative z-40 duration-200 shadow-md bg-white dark:bg-gray-900 dark:text-white">
      {/* La navbar de haut */}
      <div className="bg-primary/40 py-2 dark:bg-primary/60">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <img src={logo} alt="logo" width={45} />
              <h1 className="text-2xl font-extrabold">Theo-Shop</h1>
            </div>
            {/* Le bouton recherche et l'icône course */}
            <div className="flex items-center gap-2">
              <div className="relative max-sm:hidden group">
                <input
                  type="search"
                  placeholder="Search. . ."
                  className="w-[200px] hover:w-[300px] dark:text-black transition-all duration-300 rounded-full py-1 px-5 border-2 border-gray-300 outline-none"
                />
                <IoMdSearch className="top-1/3 group-hover:text-primary right-2 absolute text-gray-600 dark:text-gray-600" />
              </div>

              <div className="flex gap-6 group items-center">
                <button
                  onClick={() => alert("Service Non Disponible")}
                  className="bg-secondary rounded-full px-3 py-1 text-white font-bold flex gap-3"
                >
                  <span className="hidden group-hover:inline-block">Order</span>
                  <FaCartShopping className="text-2xl" />
                </button>
              </div>
              <div className="mx-6"><DarkModeToggle /></div>
            </div>
          </div>
        </div>
      </div>
      {/* En Dessous De la NavBar */}
      <div>
        <div className="flex justify-center">
          <ul className="sm:flex gap-10 pt-2 max-sm:hidden">
            {navbarLinks.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="hover:text-secondary transition-all duration-300"
                >
                  {data.title}
                </a>
              </li>
            ))}
            <div className="flex items-center">
              <li className="group">
                <a
                  href="#"
                  className="flex items-center gap-1 group-hover:text-secondary duration-300"
                >
                  Trending Products
                  <FaCaretDown className="group-hover:rotate-180 duration-300" />
                </a>

                <div className="bg-white dark:text-black hidden z-[9] group-hover:block absolute p-2 rounded-md">
                  <ul>
                    {dropdownItems.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="hover:bg-primary/40 rounded-md p-3 duration-300 inline-block"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;