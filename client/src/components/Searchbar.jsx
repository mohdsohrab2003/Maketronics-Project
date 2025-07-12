import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ data }) => {
  const [input, setInput] = useState(data ? data : "");
  const navigate = useNavigate();

  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate("/search/" + input);
  };

  const clearInputHandler = () => {
    setInput("");
    navigate("/");
  };

  return (
    <form className="max-w-md mx-auto mt-20" onSubmit={onSearchHandler}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="search"
          id="default-search"
          className="block cursor-pointer w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Fashion..."
          required
        />
        <button
          type="button"
          onClick={clearInputHandler}
          className="text-white cursor-pointer absolute right-[6.5rem] bottom-2.5 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Clear
        </button>

        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
