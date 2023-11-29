/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8000/api/getProducts");
    setAllProducts(res.data.productData);
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(
      `http://localhost:8000/api/deleteProducts/${id}`
    );
    fetchData();
  };

  const handleEdit = (id) => {
    navigate(`/update-product?id=${id}`);
  };

  return (
    <div className="mx-auto max-w-3xl my-10">
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>description</th>
          <th>seller_name</th>
          <th>price</th>
          <th colSpan={2}>Actions</th>
        </tr>
        {allProducts &&
          allProducts.length > 0 &&
          allProducts.map((product) => {
            return (
              <tr key={product.id}>
                <th>{product.id}</th>
                <th>{product.name}</th>
                <th>{product.description}</th>
                <th>{product.seller_name}</th>
                <th>{product.price}</th>
                <th>
                  <button
                    className="border border-yellow-400 text-yellow-600 p-2 rounded-lg uppercase hover:bg-yellow-600 hover:text-white"
                    type="button"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </button>
                </th>
                <th>
                  <button
                    className="border border-red-400 text-red-600 p-2 rounded-lg uppercase hover:bg-red-600 hover:text-white"
                    type="button"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
      </table>
    </div>
  );
}
