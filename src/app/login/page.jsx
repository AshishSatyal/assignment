import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[100vh]'>
      <h1 className='font-semibold text-4xl capitalize'>login</h1>
      <div className='my-2 px-10 rounded-xl boxShadow'>
        <form className='my-8'>
          <div className='flex flex-col justify-center items-center gap-3 h-full'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email'>Email</label>
              <input
                className='focus:border-gray-800 px-2 border border-black rounded-xl w-[15rem] h-10'
                type='email'
                name='email'
                id='email'
                placeholder='email'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='password'>Password</label>
              <input
                className='focus:border-gray-800 px-2 border border-black rounded-xl w-[15rem] h-10'
                type='password'
                name='password'
                id='password'
                placeholder='password'
              />
            </div>
            <div>
              <button className='hover:border-slate-500 my-5 border border-black rounded-xl w-[15rem] h-10'>
                Login
              </button>
            </div>
          </div>
        </form>
        <div className='flex flex-col text-center'>
          <Link href='/forgotpassword'>Forgot password?</Link>
          <Link className='my-2 font-semibold text-xl' href='/signup'>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
