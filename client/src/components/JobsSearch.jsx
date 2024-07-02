import React, { useState } from 'react';

export default function JobsSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <div className="p-12 flex justify-center">
      <form onSubmit={handleSubmit} className="border divide-x-2 rounded-lg w-[50%] flex shadow-lg">
        <input
          className="w-full rounded-lg p-4 focus:outline-none"
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="font-semibold p-4 px-12 hover:text-white hover:bg-green-500 rounded-lg hover:duration-200 duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
}
