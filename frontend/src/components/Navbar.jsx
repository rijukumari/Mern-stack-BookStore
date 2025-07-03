import React, { useRef, useEffect, useState } from "react";
import logo from "/assets/logo.png";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const { authUser } = useAuth();
  console.log(authUser);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const loginModalRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navItems = (
    <>
      <li className="pt-4 text-lg">
        <a href="/">Home</a>
      </li>
      <li className="pt-4 text-lg">
        <a href="/course">Course</a>
      </li>
      <li className="pt-4 text-lg">
        <a href="/contact">Contact</a>
      </li>
      <li className="pt-4 text-lg">
        <a href="/about">About</a>
      </li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl mx-auto px-4 sm:px-6 fixed top-0 left-0 right-0 z-50 
    ${
      sticky
        ? "shadow-md bg-base-300 dark:bg-slate-600 transition-all duration-300"
        : "bg-transparent"
    }
    dark:bg-slate-900 dark:text-white`}
    >
      <div className="navbar flex flex-wrap justify-between items-center py-2">
        {/* Start */}
        <div className="flex items-center gap-2 flex-1">
          {/* Mobile menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-[1]"
            >
              {navItems}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold whitespace-nowrap"
          >
            <img src={logo} className="h-10 w-auto sm:h-14" alt="Logo" />
            <span className="text-xl sm:text-2xl pt-1 sm:pt-2">BookStore</span>
          </Link>
        </div>

        {/* Center (hidden on mobile) */}
        <div className="hidden lg:flex navbar-center">
          <ul className="menu menu-horizontal px-1 text-base">{navItems}</ul>
        </div>

        {/* End */}
        <div className="flex items-center gap-2 flex-wrap justify-end flex-1 sm:flex-nowrap">
          {/* Search (hidden on small screens) */}
          <div className="hidden md:flex items-center">
            <label className="px-3 py-2 border rounded-md flex items-center gap-2">
              <input
                type="search"
                className="outline-none bg-transparent dark:bg-slate-900 dark:text-white"
                placeholder="Search"
              />
              <svg
                className="h-4 w-4 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
            </label>
          </div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="mt-2 sm:mt-4">
            {/* ...same SVG logic... */}
          </button>

          {/* Auth Buttons */}
          {authUser ? (
            <Logout />
          ) : (
            <>
              <button
                className="bg-black text-white px-4 py-2 mt-2 sm:mt-4 rounded-md hover:bg-slate-800 transition duration-300 text-sm"
                onClick={() => loginModalRef.current?.showModal()}
              >
                Login
              </button>
              <Login ref={loginModalRef} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
