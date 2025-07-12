import React from "react";

const BookCard = ({ product }) => {
  return (
    <>
      {/* <div
        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm
                dark:bg-gray-800 dark:border-gray-700 flex flex-col"
      >
        
        <a href="#" className="flex-shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[200px] p-4 rounded-t-lg object-contain"
          />
        </a>

        
        <div className="flex flex-col flex-1 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
          </a>

          <div className="flex items-center mt-2.5 mb-5">
            <span
              className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm
                       dark:bg-blue-200 dark:text-blue-800 ml-3"
            >
              {product.brand}
            </span>
          </div>

          
          <div className="mt-auto flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
                   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div> */}

      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-8 w-full h-[420px] rounded-t-lg object-contain"
            src={product.image}
            alt="Book image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse"></div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
              {product.brand}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
