import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiNetflixFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { keywordContext } from '../../context/keyWordContext';

export default function NavigationBar() {
  const navigate = useNavigate();
  const { keyword, setKeyword, onchangeKeyword } = useContext(keywordContext);

  const searchByKeyword = e => {
    e.preventDefault();
    navigate(`/movies?q=${keyword}`, {
      state: { keyword },
    });
    setKeyword('');
  };

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
          <form className='flex items-center gap-2' onSubmit={searchByKeyword}>
            <input
              className='border border-zinc-600 bg-zinc-500 text-gray-50 rounded-lg border-black h-8 w-36 outline-none'
              type='text'
              value={keyword}
              onChange={onchangeKeyword}
            />
            <button
              className='border border-logo bg-logo rounded-lg border-black h-8 w-16 text-basic'
              onSubmit={searchByKeyword}
            >
              search
            </button>
          </form>
        </section>
      </ul>
    </nav>
  );
}
