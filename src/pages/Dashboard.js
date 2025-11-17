import React from 'react';
import { links } from '../data/links';
import { getTagColor } from '../utils/getTagColor';

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">All Links</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <button className="p-2 rounded-l-lg bg-primary text-white">
              <span className="material-symbols-outlined">view_list</span>
            </button>
            <button className="p-2 rounded-r-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              <span className="material-symbols-outlined">grid_view</span>
            </button>
          </div>
          <select className="form-select h-10 rounded-lg bg-white dark:bg-[#292e38] border-gray-300 dark:border-[#292e38] text-gray-700 dark:text-white focus:ring-primary focus:border-primary">
            <option>Sort by Date</option>
            <option>Sort by Name</option>
            <option>Sort by Last Used</option>
          </select>
        </div>
      </div>
      <div className="space-y-4">
        {links.map((link) => (
          <div key={link.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#1a1d25] border border-gray-200 dark:border-[#292e38]">
            <img className="w-10 h-10 rounded-lg object-contain bg-white flex-shrink-0" alt={`${link.title} logo`} src={link.icon} />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-800 dark:text-white truncate">{link.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{link.description}</p>
              <div className="mt-2 flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary">{link.category}</span>
                {link.tags.map((tag) => (
                  <span key={tag} className={`px-2 py-0.5 text-xs font-medium rounded-full ${getTagColor(tag)}`}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 self-start sm:self-center">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"><span className="material-symbols-outlined text-xl">content_copy</span></button>
              <button className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 ${link.isFavorite ? 'text-yellow-500' : ''}`}>
                <span className="material-symbols-outlined text-xl">{link.isFavorite ? 'star' : 'star_border'}</span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"><span className="material-symbols-outlined text-xl">edit</span></button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"><span className="material-symbols-outlined text-xl">delete</span></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
