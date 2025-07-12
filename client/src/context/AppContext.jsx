import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState([]);

  const fetchProductData = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/productdata");
      const data = await res.json();
      setProductData(data);
    } catch (err) {
      setError(err.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [bookData]);
  const value = {
    productData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
