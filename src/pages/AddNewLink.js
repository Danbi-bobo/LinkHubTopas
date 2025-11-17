import React from 'react';

const AddNewLink = () => {
  return (
    <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Add New Link</h1>
        <p className="text-gray-500 dark:text-[#9da6b8] text-base font-normal leading-normal">Fill in the details below to add a new link to the hub.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {/* Left Column: Form Fields */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-white dark:bg-[#1C1F26] p-6 rounded-xl border border-gray-200 dark:border-[#3c4453] space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Link Details</h2>
            <label className="flex flex-col w-full">
              <p className="text-gray-700 dark:text-white text-base font-medium leading-normal pb-2">Link URL</p>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#9da6b8]">link</span>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#3c4453] bg-gray-50 dark:bg-[#111318] focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-[#9da6b8] pl-12 pr-4 text-base font-normal leading-normal" placeholder="https://example.com" value="" />
              </div>
            </label>
            <label className="flex flex-col w-full">
              <p className="text-gray-700 dark:text-white text-base font-medium leading-normal pb-2">Link Title</p>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#3c4453] bg-gray-50 dark:bg-[#111318] focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-[#9da6b8] p-[15px] text-base font-normal leading-normal" placeholder="Enter a descriptive title" value="" />
            </label>
            <label className="flex flex-col w-full">
              <p className="text-gray-700 dark:text-white text-base font-medium leading-normal pb-2">Description <span className="text-gray-400">(optional)</span></p>
              <textarea className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#3c4453] bg-gray-50 dark:bg-[#111318] focus:border-primary min-h-36 placeholder:text-gray-400 dark:placeholder:text-[#9da6b8] p-[15px] text-base font-normal leading-normal" placeholder="Add a brief description of the link's content"></textarea>
            </label>
          </div>
          <div className="bg-white dark:bg-[#1C1F26] p-6 rounded-xl border border-gray-200 dark:border-[#3c4453] space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Configuration</h2>
            <label className="flex flex-col w-full">
              <p className="text-gray-700 dark:text-white text-base font-medium leading-normal pb-2">Categories</p>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#3c4453] bg-gray-50 dark:bg-[#111318] focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-[#9da6b8] p-[15px] text-base font-normal leading-normal" placeholder="e.g. Design, Engineering, Marketing" value="" />
            </label>
            <div>
              <p className="text-gray-700 dark:text-white text-base font-medium leading-normal pb-2">Behavior</p>
              <label className="flex items-center cursor-pointer" htmlFor="new-tab-toggle">
                <div className="relative">
                  <input className="sr-only peer" id="new-tab-toggle" type="checkbox" />
                  <div className="block w-14 h-8 bg-gray-200 dark:bg-[#3c4453] rounded-full"></div>
                  <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform peer-checked:translate-x-full peer-checked:bg-primary"></div>
                </div>
                <div className="ml-3 text-gray-700 dark:text-gray-300 text-base font-normal">
                  Open in new tab
                </div>
              </label>
            </div>
          </div>
          <div className="bg-white dark:bg-[#1C1F26] p-6 rounded-xl border border-gray-200 dark:border-[#3c4453] space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Access & Permissions</h2>
            <fieldset>
              <legend className="text-gray-700 dark:text-white text-base font-medium leading-normal pb-3">Who can see this link?</legend>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex-1 flex items-center p-4 rounded-lg border border-gray-300 dark:border-[#3c4453] has-[:checked]:border-primary has-[:checked]:bg-primary/10 dark:has-[:checked]:bg-primary/20 cursor-pointer transition-colors">
                  <input defaultChecked className="form-radio h-5 w-5 text-primary focus:ring-primary focus:ring-offset-0 border-gray-400 dark:border-gray-500 bg-transparent" name="permissions" type="radio" value="public" />
                  <div className="ml-4">
                    <p className="font-medium text-gray-800 dark:text-white">Public</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Everyone in the organization can see this link.</p>
                  </div>
                </label>
                <label className="flex-1 flex items-center p-4 rounded-lg border border-gray-300 dark:border-[#3c4453] has-[:checked]:border-primary has-[:checked]:bg-primary/10 dark:has-[:checked]:bg-primary/20 cursor-pointer transition-colors">
                  <input className="form-radio h-5 w-5 text-primary focus:ring-primary focus:ring-offset-0 border-gray-400 dark:border-gray-500 bg-transparent" name="permissions" type="radio" value="teams" />
                  <div className="ml-4">
                    <p className="font-medium text-gray-800 dark:text-white">Specific Teams</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Only members of selected teams.</p>
                  </div>
                </label>
                <label className="flex-1 flex items-center p-4 rounded-lg border border-gray-300 dark:border-[#3c4453] has-[:checked]:border-primary has-[:checked]:bg-primary/10 dark:has-[:checked]:bg-primary/20 cursor-pointer transition-colors">
                  <input className="form-radio h-5 w-5 text-primary focus:ring-primary focus:ring-offset-0 border-gray-400 dark:border-gray-500 bg-transparent" name="permissions" type="radio" value="private" />
                  <div className="ml-4">
                    <p className="font-medium text-gray-800 dark:text-white">Private</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Only you can see this link.</p>
                  </div>
                </label>
              </div>
            </fieldset>
          </div>
        </div>
        {/* Right Column: Preview & Actions */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 flex flex-col gap-6">
            <div className="bg-white dark:bg-[#1C1F26] p-6 rounded-xl border border-gray-200 dark:border-[#3c4453]">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Live Preview</h2>
              <div className="bg-background-light dark:bg-background-dark p-6 rounded-lg border border-gray-300/50 dark:border-[#3c4453]/50">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-lg text-primary">Untitled Link</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">https://example.com</p>
                  <p className="text-base text-gray-700 dark:text-gray-300 line-clamp-2">A brief description of the link's content will appear here once you start typing.</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/90">Category</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <button className="flex-1 flex w-full items-center justify-center gap-2 h-14 px-6 rounded-lg bg-primary text-white text-base font-semibold transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark">
                <span className="material-symbols-outlined">add_circle</span>
                Add Link
              </button>
              <button className="flex-1 flex w-full items-center justify-center gap-2 h-14 px-6 rounded-lg bg-gray-200 dark:bg-[#3c4453] text-gray-800 dark:text-white text-base font-semibold transition-colors hover:bg-gray-300 dark:hover:bg-[#4a5468]">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewLink;
