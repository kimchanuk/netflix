import React from 'react';
import { Link } from 'react-router-dom';
import { RiNetflixFill } from 'react-icons/ri';

export default function NavigationBar() {
  return (
    <nav className='bg-slate-950'>
      <ul className='flex justify-between p-4 items-center'>
        <section className='flex gap-8 text-lg items-center'>
          <Link to={'/'}>
            <li className='text-3xl text-logo'>
              <RiNetflixFill />
            </li>
          </Link>
          <Link to={'/'}>
            <li>Home</li>
          </Link>
          <Link to={'/movies'}>
            <li>Movie</li>
          </Link>
        </section>
        <section>
          <form className='flex items-center gap-2'>
            <input
              className='border border-zinc-600 bg-zinc-500 text-gray-50 rounded-lg border-black h-8 w-36 outline-none'
              type='text'
            />
            <button className='border border-logo bg-logo rounded-lg border-black h-8 w-16 text-basic'>
              search
            </button>
          </form>
        </section>
      </ul>
    </nav>
  );
}
