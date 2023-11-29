/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  // id
  // name
  // description
  // seller_name
  // price

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    seller_name: "",
    price: 0,
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/api/createProducts", {
      formData,
    });
    navigate("/");
  };

  return (
    <form className="my-5 max-w-xl mx-auto flex flex-col gap-3">
      <label className="flex flex-row gap-3 items-center whitespace-nowrap">
        <p className="">Name :</p>
        <input
          className="border border-slate-300 p-3 rounded-lg w-full"
          name="name"
          type="text"
          placeholder="Enter product name..."
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label className="flex flex-row gap-3 items-center whitespace-nowrap">
        <p className="">Description :</p>
        <input
          className="border border-slate-300 p-3 rounded-lg w-full"
          type="text"
          name="description"
          placeholder="Enter product description..."
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label className="flex flex-row gap-3 items-center whitespace-nowrap">
        <p className="">Seller Name :</p>
        <input
          className="border border-slate-300 p-3 rounded-lg w-full"
          type="text"
          name="seller_name"
          placeholder="Enter seller name..."
          value={formData.seller_name}
          onChange={handleChange}
        />
      </label>
      <label className="flex flex-row gap-3 items-center whitespace-nowrap">
        <p className="">Price :</p>
        <input
          className="border border-slate-300 p-3 rounded-lg w-full"
          type="number"
          name="price"
          placeholder="Enter product price..."
          value={formData.price}
          onChange={handleChange}
        />
      </label>
      <button
        onClick={handleSubmit}
        className="bg-teal-500 p-3 rounded-lg uppercase my-5 hover:opacity-90 hover:shadow-md"
      >
        Create product
      </button>
    </form>
  );
}
