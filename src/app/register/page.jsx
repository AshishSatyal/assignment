"use client";

import Link from "next/link";
import React, { useState } from "react";
import Input from "../component/Input";
import axios from "axios";
import { useRouter } from "next/navigation";

const defaultData = { fullname: "", email: "", password: "" };

const Register = () => {
  const [data, setData] = useState(defaultData);

  const router = useRouter();

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onRegister = async (e) => {
    e.preventDefault();
    if (!data.fullname || !data.email || !data.password) {
      alert("please fill all fields");
      return;
    }
    try {
      const response = await axios.post("api/users/register", data);
      setData(defaultData);

      if (response.status === 200) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  return (
    <div className='flex flex-col justify-center items-center w-full h-[100vh]'>
      <h1 className='py-2 font-bold text-4xl capitalize'>signup</h1>
      <div className='rounded-xl w-[20rem] lg:w-[25rem] boxShadow'>
        <form className='py-5 w-full'>
          <div className='flex flex-col gap-2'>
            <div className='flex px-4'>
              <div className='flex flex-col gap-1'>
                <Input
                  label={"Full Name"}
                  type={"text"}
                  id={"fullname"}
                  placeholder={"john Doe"}
                  name={"fullname"}
                  value={data.name}
                  onChange={(e) => onValueChange(e)}
                />
              </div>
            </div>
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
            <div className='flex flex-col gap-1 px-4'>
              <Input
                label={"Confirm Password"}
                type={"password"}
                id={"confirm_password"}
                placeholder={"********"}
                name={"confirm_password"}
              />
            </div>
            <div className='mt-5 px-4'>
              <button
                className='border border-black hover:border-black/40 rounded-xl w-[18rem] lg:w-[22rem] h-10 font-semibold text-xl'
                type='submit'
                onClick={(e) => onRegister(e)}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className='mt-3 text-center'>
          <Link className='font-semibold text-sm' href='/login'>
            Already Signed Up? Login
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

export default Register;
