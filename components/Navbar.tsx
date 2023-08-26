import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="py-4">
      <div className="container mx-auto flex justify-between items-center">
         <div className='flex items-center space-x-6'>
            <Link href={"/"} className='text-indigo-500 text-2xl font-semibold'>Horizenaid</Link>
            <Link href={"/"} className='text-black hover:text-gray-300'>Home</Link>
            <Link href={"/search"} className='text-black hover:text-gray-300'>Search</Link>
            <Link href={"/discover"} className='text-black hover:text-gray-300'>Discover</Link>
            <Link href={"/charities"} className='text-black hover:text-gray-300'>For Charities</Link>
            <Link href={"/about"} className='text-black hover:text-gray-300'>What we do</Link>
         </div>     
         <div className='flex items-center space-x-4'>
            <Link href={"/signin"} className='text-black hover:text-gray-300'>
                <button className='bg-transparent text-black px-4 py-2 rounded-md ring-offset-1 hover:bg-black hover:text-white focus:ring-1 focus:ring-black'>Log in</button>
            </Link>
            <Link href={"/register"}>
                <button className='bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600'>Register</button>
            </Link>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;

