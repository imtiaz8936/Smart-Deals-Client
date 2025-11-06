import React from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li className="font-semibold text-[16px]">Home</li>
      </NavLink>
      <NavLink
        to="/all-products"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li className="font-semibold text-[16px]">All Products</li>
      </NavLink>
      <NavLink
        to="/my-products"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li className="font-semibold text-[16px]">My Products</li>
      </NavLink>
      <NavLink
        to="/my-bids"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li className="font-semibold text-[16px]">My Bids</li>
      </NavLink>
      <NavLink
        to="/create-product"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li className="font-semibold text-[16px]">Create Product</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="font-bold text-3xl">
          Smart<span className="text-[#894fed]">Deals</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-4">
        <Link to="/login" className="btn btn-primary">
          Log In
        </Link>
        <Link to="/register" className="btn btn-primary">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
