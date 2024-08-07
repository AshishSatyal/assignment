"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const handleUpdate = (product) => {
    setEditProduct(product);
    setNewTitle(product.title);
    setNewPrice(product.price);
  };

  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(`https://dummyjson.com/products/${id}`);
      //   if (res.status === 200) {
      //     router.push("/");
      //   }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const productEl = products.map((item) => {
    return (
      <div className='flex flex-col justify-around items-start px-4 border w-80 md:w-72 h-90'>
        {/* <button onClick={EditForm()}>Edit</button> */}
        <div className='px-4 w-full h-full object-cover'>
          <img className='w-full h-full md:h-60' src={item.images[0]} />
        </div>
        <div>
          <p className='my-2 font-serif text-xl'>{item.title}</p>
          <p className='my-2 font-serif text-xl'>${item.price}</p>
        </div>
        <div className='flex gap-4'>
          <Link href={`/editproduct/${item.id}`} className='text-blue-500'>
            Edit
          </Link>
          <button
            onClick={() => deleteProduct(item.id)}
            className='text-red-500'
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className='flex flex-col justify-center items-center mx-auto'>
      <p className='my-5 font-serif text-3xl'>Products</p>
      <div className='flex flex-col justify-center gap-8 md:grid md:grid-cols-4'>
        {productEl}
        {}
      </div>
    </div>
  );
};

export default Products;
