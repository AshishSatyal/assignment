"use client";
import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const logout = async (e) => {
    e.preventDefault();
    const response = await axios.get("/api/users/logout");

    if (response.status === 200) {
      router.push("/login");
    }
  };
  return (
    <div className='top-0 left-0 sticky bg-white/40 px-4 border w-full h-16 md:h-24'>
      <div className='flex justify-between items-center md:px-4 h-full'>
        <h1 className='font-bold text-2xl text-slate-500 lg:text-4xl capitalize'>
          Task
        </h1>

        <div className='flex gap-5'>
          <Link
            href='/'
            className='flex justify-center items-center border border-blue-500 hover:border-none rounded-xl w-24 md:w-36 h-10 md:h-14 font-semibold text-black text-sm md:text-xl transition-all'
            onClick={(e) => logout(e)}
          >
            Logout
          </Link>
          <Link
            href='/'
            className='flex justify-center items-center border border-blue-500 hover:border-none rounded-xl w-24 md:w-36 h-10 md:h-14 font-semibold text-black text-sm md:text-xl transition-all'
          >
            Add product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
