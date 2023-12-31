/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-lime-200 p-3 shadow-lg flex flex-row justify-between items-center">
      <Link
        to={"/"}
        className="p-3 font-semibold font hover:transition hover:scale-105"
      >
        Product App
      </Link>
      <Link
        to={"/create-product"}
        className="hover:bg-slate-500 p-3 hover:transition duration-300 rounded-xl border border-slate-400 text-slate-600 font-semibold hover:text-white"
      >
        Create a product
      </Link>
    </div>
  );
}
