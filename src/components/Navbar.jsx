import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-wrapper p-5 bg-slate-300 max-sm:hidden">
      <nav>
        <ul className="navbar-menu flex flex-col gap-2">
          <Link to={"/"}>
            <li className="navbar-item bg-red-50 p-2 hover:bg-red-100 text-nowrap text-xs sm:text-xs md:text-sm max-[640px]:text-xs 2xl:text-lg xl:text-lg">
              My Charts
            </li>
          </Link>
          <Link to={"/profile"}>
          <li className="navbar-item bg-red-50 p-2 hover:bg-red-100 text-nowrap text-xs sm:text-xs md:text-sm max-[640px]:text-xs 2xl:text-lg xl:text-lg">
              Profile
            </li>
          </Link>
          <Link to={"/settings"}>
          <li className="navbar-item bg-red-50 p-2 hover:bg-red-100 text-nowrap text-xs sm:text-xs md:text-sm max-[640px]:text-xs 2xl:text-lg xl:text-lg">
              Settings
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
