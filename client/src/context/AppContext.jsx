import { useEffect, useState, createContext } from "react";

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
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const value = {
    productData,
    loading,
    error,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
