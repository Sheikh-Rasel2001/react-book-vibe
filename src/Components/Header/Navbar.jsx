import React from 'react';
import { Link, Links, } from 'react-router';

    

const Navbar = () => {
  const Links = <>
        <ul className='flex gap-4 text-lg font-bold text-green-400'>
       <Link to={'/'}><li>Home</li></Link>
       <Link to={'/about'}><li>About Book</li></Link>
       <Link to={'/listedBook'}><li>Listed Books</li></Link>
       <Link to={'/pageToReads'}><li>Page to Reads</li></Link>
        </ul>
    </>
    return (
        <div className='mb-10'>
           <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {Links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold text-red-700">Boi <span className='text-green-700'>Vibe</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {Links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;