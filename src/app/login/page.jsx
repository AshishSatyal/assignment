"use client";

import Link from "next/link";
import React, { useState } from "react";
import Input from "../component/Input";
import axios from "axios";
import { useRouter } from "next/navigation";

const defaultData = { email: "", password: "" };

const page = () => {
  const router = useRouter();
  const [data, setData] = useState(defaultData);

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onLogin = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      alert("please fill all fields");
      return;
    }
    try {
      const response = await axios.post("api/users/login", data);
      setData(defaultData);

      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  return (
    <div className='flex flex-col justify-center items-center w-full h-[100vh]'>
      <h1 className='py-2 font-bold text-4xl capitalize'>Login</h1>
      <div className='rounded-xl w-[20rem] lg:w-[25rem] boxShadow'>
        <form className='py-5 w-full'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-1 px-4'>
              <Input
                label={"Email"}
                type={"email"}
                id={"email"}
                placeholder={"john@gmail.com"}
                name={"email"}
                value={data.email}
                onChange={(e) => onValueChange(e)}
              />
            </div>

            <div className='flex flex-col gap-1 px-4'>
              <Input
                label={"Password"}
                type={"password"}
                id={"password"}
                placeholder={"********"}
                name={"password"}
                value={data.password}
                onChange={(e) => onValueChange(e)}
              />
            </div>

            <div className='mt-5 px-4'>
              <button
                className='border border-black hover:border-black/40 rounded-xl w-[18rem] lg:w-[22rem] h-10 font-semibold text-xl'
                type='submit'
                onClick={(e) => onLogin(e)}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className='mt-3 text-center'>
          <Link className='font-semibold text-sm' href='/register'>
            Don't have an account? Register
          </Link>
          <Link href='/'>
            <p className='my-2 font-semibold text-sm'>
              Continue Without Registering
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
