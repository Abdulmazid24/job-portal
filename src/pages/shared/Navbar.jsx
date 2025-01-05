import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Home</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold space-x-2"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
          JOB PORTAL
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold space-x-2">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to={'/register'}
          className="px-3 py-2 rounded-md font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          Register
        </Link>
        <Link
          to={'/singIn'}
          className="px-3 py-2 rounded-md font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ml-2"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
