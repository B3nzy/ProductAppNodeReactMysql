/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UpdateProduct() {
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

  useEffect(() => {
    (async () => {
      const urlParams = await new URLSearchParams(window.location.search);
      const id = urlParams.get("id");
      const res = await axios.get(`http://localhost:8000/api/getProduct/${id}`);

      setFormData({
        id: res.data.productData[0].id,
        name: res.data.productData[0].name,
        description: res.data.productData[0].description,
        seller_name: res.data.productData[0].seller_name,
        price: res.data.productData[0].price,
      });
    })();
  }, [location.search]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const urlParams = await new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const res = await axios.post(
      `http://localhost:8000/api/updateProduct/${id}`,
      {
        formData,
      }
    );
    navigate("/");
  };

  return (
    <form className="my-5 max-w-md mx-auto flex flex-col gap-3">
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
        onClick={handleUpdate}
        className="bg-teal-500 p-3 rounded-lg uppercase my-5 hover:opacity-90 hover:shadow-md"
      >
        Update product
      </button>
    </form>
  );
}
