import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[100vh]'>
      <h1 className='py-2 font-bold text-4xl capitalize'>signup</h1>
      <div className='rounded-xl w-[20rem] lg:w-[25rem] boxShadow'>
        <form className='py-5 w-full'>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2 px-4'>
              <div className='flex flex-col gap-1'>
                <label className='font-semibold' htmlFor='firstName'>
                  First Name
                </label>
                <input
                  type='text'
                  className='focus:border-gray-800 px-2 border border-black rounded-xl w-[9rem] lg:w-[11rem] h-10'
                  placeholder='John'
                  id='firstName'
                  name='firstname'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='lastName' className='font-semibold'>
                  Last Name
                </label>
                <input
                  className='focus:border-gray-800 px-2 border border-black rounded-xl w-[9rem] lg:w-[11rem] h-10'
                  type='text'
                  placeholder='Doe'
                  id='lastName'
                  name='lastname'
                />
              </div>
            </div>
            <div className='flex flex-col gap-1 px-4'>
              <label htmlFor='email' className='font-semibold'>
                Email
              </label>
              <input
                className='focus:border-gray-800 px-2 border border-black rounded-xl w-[18rem] lg:w-[22rem] h-10'
                type='text'
                placeholder='example@gmail.com'
                id='email'
                name='email'
              />
            </div>

            <div className='flex flex-col gap-1 px-4'>
              <label htmlFor='password' className='font-semibold'>
                Password
              </label>
              <input
                className='focus:border-gray-800 px-2 border border-black rounded-xl w-[18rem] lg:w-[22rem] h-10'
                type='password'
                placeholder='********'
                id='password'
                name='password'
              />
            </div>
            <div className='flex flex-col gap-1 px-4'>
              <label htmlFor='confirm_password' className='font-semibold'>
                Confirm Password
              </label>
              <input
                className='focus:border-gray-800 px-2 border border-black rounded-xl w-[18rem] lg:w-[22rem] h-10'
                type='password'
                placeholder='********'
                id='confirm_password'
                name='confirm_password'
              />
            </div>
            <div className='mt-5 px-4'>
              <button
                className='border border-black hover:border-black/40 rounded-xl w-[18rem] lg:w-[22rem] h-10 font-semibold text-xl'
                type='submit'
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

export default page;
