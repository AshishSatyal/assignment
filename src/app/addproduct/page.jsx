"use client";
import React, { useState } from "react";

const defaultData = { id: 555, title: "", price: "", images: null };

const Page = () => {
  const [data, setData] = useState(defaultData);

  const addProduct = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  console.log(data);

  return (
    <div className='mx-auto px-5 max-w-[1200px]'>
      <div className='my-5 text-center'>
        <p className='text-2xl capitalize'>add a product</p>
      </div>
      <div className='flex justify-center items-center w-full'>
        <form
          className='flex flex-col gap-4 p-4 border w-96'
          onSubmit={addProduct} // Use onSubmit for form submission
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
              value={data.title}
              onChange={handleChange}
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
              value={data.price}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='images'>Add image</label>
            <input
              type='file'
              accept='image/*'
              name='images'
              id='images'
              onChange={handleChange}
            />
          </div>
          <button
            type='submit'
            className='hover:border-2 bg-gradient-to-tl from-teal-400 to-blue-500 rounded-xl h-10 text-white'
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
