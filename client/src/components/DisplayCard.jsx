import React, { useContext, useEffect, useState } from "react";
import BookCard from "./BookCard";
import { AppContext } from "../context/AppContext";
import Searchbar from "./Searchbar";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const DisplayCard = () => {
  const { productData } = useContext(AppContext);
  const { input } = useParams();
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    if (Array.isArray(productData) && productData.length > 0) {
      const tempProduct = productData.slice();

      const getTitle = (item) =>
        item.title || item.courseTitle || item.name || "";

      if (input) {
        const filtered = tempProduct.filter((item) =>
          getTitle(item).toLowerCase().includes(input.toLowerCase())
        );

        setFilterProduct(filtered);
      } else {
        setFilterProduct(tempProduct);
      }
    }
  }, [productData, input]);

  return (
    <>
      <div className="relative md:px-36 px-8 pt-20 text-left">
        <Searchbar data={input} />
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-3 my-16 md:p-0">
          {filterProduct.length === 0 ? (
            <p className="text-red-500 text-xl">No matching items found.</p>
          ) : (
            filterProduct.map((product, idx) => {
              try {
                return <BookCard key={idx} product={product} />;
              } catch (e) {
                console.error("BookCard Error:", e);
                return <p>Error rendering item</p>;
              }
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DisplayCard;
