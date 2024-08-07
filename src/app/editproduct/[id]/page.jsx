"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const pages = () => {
  const router = useRouter();

  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  async function getProduct(id) {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    setProductData({ title: data.title, price: data.price });
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getProduct(id);
  }, []);

  async function updateProduct(id) {
    try {
      const res = await axios.put(
        `https://dummyjson.com/products/${id}`,
        productData
      );
      if (res.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className='mx-auto px-5 max-w-[1200px]'>
      <div className='my-5 text-center'>
        <p className='text-2xl capitalize'>update a product a product</p>
      </div>
      <div className='flex justify-center items-center w-full'>
        <form
          className='flex flex-col gap-4 p-4 border w-96'
          // Use onSubmit for form submission
          onSubmit={(e) => {
            e.preventDefault();
            updateProduct(id);
          }}
        >
          <div className='flex flex-col gap-1'>
            <label className='capitalize' htmlFor='title'>
              product name
            </label>
            <input
              className='border-2 px-2 rounded-xl w-full h-10'
              type='text'
              id='title'
              name='title'
              placeholder='title'
              value={productData?.title}
              onChange={(e) =>
                setProductData({ ...productData, title: e.target.value })
              }
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='capitalize' htmlFor='price'>
              product price
            </label>
            <input
              className='border-2 px-2 rounded-xl w-full h-10'
              type='number'
              id='price'
              name='price'
              placeholder='price'
              value={productData?.price}
              onChange={(e) =>
                setProductData({ ...productData, price: e.target.value })
              }
            />
          </div>

          <button
            type='submit'
            className='hover:border-2 bg-gradient-to-tl from-teal-400 to-blue-500 rounded-xl h-10 text-white'
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default pages;
