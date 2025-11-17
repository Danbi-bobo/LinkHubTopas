import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-gray-200 dark:border-[#292e38] hidden lg:block">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <NavLink to="/" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary dark:bg-[#292e38]">
              <span className="material-symbols-outlined">link</span>
              <p className="text-sm font-medium leading-normal">All Links</p>
            </NavLink>
            <NavLink to="/favorites" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 text-gray-700 dark:text-white">
              <span className="material-symbols-outlined">star</span>
              <p className="text-sm font-medium leading-normal">Favorites</p>
            </NavLink>
            <NavLink to="/pinned" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 text-gray-700 dark:text-white">
              <span className="material-symbols-outlined">push_pin</span>
              <p className="text-sm font-medium leading-normal">Pinned Links</p>
            </NavLink>
          </div>
          <div className="flex flex-col">
            <details className="flex flex-col border-t border-t-gray-200 dark:border-t-[#3c4453] py-2 group" open>
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">Categories</p>
                <span className="material-symbols-outlined text-gray-600 dark:text-white group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="flex flex-col gap-1 pl-2 text-sm text-gray-500 dark:text-[#9da6b8]">
                <a className="block px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800/50" href="#">Marketing Resources</a>
                <a className="block px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800/50" href="#">Project Phoenix</a>
                <a className="block px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800/50" href="#">Engineering Docs</a>
                <a className="block px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800/50" href="#">Onboarding</a>
              </div>
            </details>
            <details className="flex flex-col border-t border-t-gray-200 dark:border-t-[#3c4453] py-2 group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">Tags</p>
                <span className="material-symbols-outlined text-gray-600 dark:text-white group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="flex flex-col gap-1 pl-2 text-sm text-gray-500 dark:text-[#9da6b8]">
                <a className="block px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800/50" href="#">#design</a>
                <a className="block px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800/50" href="#">#q4-report</a>
                <a className="block px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800/50" href="#">#strategy</a>
              </div>
            </details>
          </div>
        </div>
        <div className="flex px-0 py-3 justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-gray-200 dark:bg-[#292e38] text-gray-700 dark:text-white gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="material-symbols-outlined text-xl">settings</span>
            <span className="truncate">Manage</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
