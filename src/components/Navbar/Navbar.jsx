import React from 'react';
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { IoIosLogIn } from 'react-icons/io';
import { FaCaretDown } from 'react-icons/fa';
import DarkMode from '../DarkMode';

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Datacovid", link: "/#" },
  { id: 3, name: "Pencegahan", link: "/#" },
];

const Navbar = ({ olahragaRef, pencegahanRef, dataCovidRef, searchTerm, setSearchTerm, onSearch }) => {

  const handleScrollToOlahraga = () => olahragaRef?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  const handleScrollToPencegahan = () => pencegahanRef?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (typeof onSearch === "function") onSearch(searchTerm);
    }
  };

  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='bg-red-600 py-3x'>
        <div className='container flex justify-between items-center'>
          <div>
            <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
              <img src={Logo} alt="Logo" className='w-10 uppercase' />Kesehatan
            </a>
          </div>

          <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input
                type="text"
                placeholder='search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                className='w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800'
              />
              <IoMdSearch
                className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer'
                onClick={() => typeof onSearch === "function" && onSearch(searchTerm)}
              />
            </div>

            <button onClick={() => alert("Login tidak tersedia untuk sekarang, mohon coba lagi nanti")}
              className='bg-gradient-to-r bg-green-600 to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
              <span className='group-hover:block hidden transition-all duration-200'>Login</span>
              <IoIosLogIn className='text-xl text-white drop-shadow-sm cursor-pointer' />
            </button>

            <div><DarkMode /></div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {Menu.map((data) => (
            <li key={data.id}>
              {data.name === "Jenis Jenis Penyakit" ? (
                <button onClick={handleScrollToOlahraga} className='inline-block px-4 hover:text-primary duration-200'>
                  {data.name}
                </button>
              ) : data.name === "Pencegahan" ? (
                <button onClick={handleScrollToPencegahan} className='inline-block px-4 hover:text-primary duration-200'>
                  {data.name}
                </button>
              ) : (
                <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>
                  {data.name}
                </a>
              )}
            </li>
          ))}

          <li className='group relative cursor-pointer'>
            <a href="#" className='flex items-center gap-[2px] py-2'>
              Virus terkini
              <span><FaCaretDown className='transition-all duration-200 group-hover:rotate-180' /></span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
              <ul>
                <li><button onClick={handleScrollToTop} className='inline-block w-full text-left rounded-md p-2 hover:bg-primary/20'>Virus Terkini</button></li>
                <li><a href="#" className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>Informasi Hangat</a></li>
                <li><a href="#" className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>Informasi Lama</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
