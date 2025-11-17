import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-b-[#292e38] px-6 py-3 bg-background-light dark:bg-background-dark">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3 text-gray-800 dark:text-white">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">LinkHub</h2>
        </div>
        <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-gray-400 dark:text-[#9da6b8] flex border border-gray-300 dark:border-[#292e38] bg-white dark:bg-[#292e38] items-center justify-center pl-3 rounded-l-lg border-r-0">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-0 border border-gray-300 dark:border-[#292e38] bg-white dark:bg-[#292e38] focus:border-primary h-full placeholder:text-gray-400 dark:placeholder:text-[#9da6b8] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search links..." value="" />
          </div>
        </label>
      </div>
      <div className="flex flex-1 justify-end gap-4 md:gap-6">
        <div className="flex gap-2">
          <NavLink to="/add" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2">
            <span className="material-symbols-outlined text-xl">add</span>
            <span className="truncate hidden sm:inline">Add New Link</span>
          </NavLink>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-gray-200 dark:bg-[#292e38] text-gray-600 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <span className="material-symbols-outlined text-xl">notifications</span>
          </button>
          <button onClick={toggleTheme} className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-gray-200 dark:bg-[#292e38] text-gray-600 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <span className="material-symbols-outlined text-xl">dark_mode</span>
          </button>
        </div>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCocarsSOaYi-7U5uvQ3jih2zPr93A4eVKovwlA15gUjEKINa7MreCbqW_DK7sdyOEYwcJ9uz3Sknjxr-fiQ-CfhsMzbZd3liGnZEwOcmiBOOYacQS0r3RAbJprOaDGirZfaudv2746de7Z1GV1d1UC0xPHVD92H1R4l80Ncj68VxMh1dgSiq6e0D5SbQMEBJ44WHjD4NWiGFrz6MaBTosPKaeUhn4Ns0MKuFjCtA_9hv7iejzjQ59Of8Lsk-_yN9LDwaz4M03a2lk")' }}></div>
      </div>
    </header>
  );
};

export default Header;
