import React from "react";
import { Link } from "react-router-dom";
import circle from "./circle.png";

import { useAuth } from "../../context/UseAuth";

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logOut } = useAuth();
  return (
    <nav className="relative container mx-auto ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={"./orange.png"} alt="" className="w-20 h-20" />
          </Link>
          {/* <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkBlue">
              Search
            </Link>
          </div> */}
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
            <a
              onClick={logOut}
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <Link to="/login" className="hover:text-darkBlue">
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 font-bold rounded text-black bg-gradient-rainbow hover:opacity-70"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
