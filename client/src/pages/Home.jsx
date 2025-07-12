import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import DisplayCard from "../components/DisplayCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <DisplayCard />
      <Footer />
    </>
  );
};

export default Home;

// useEffect(() => {
//     if (!productData || productData.length === 0) return;

//     const keyword = input?.trim().toLowerCase();
//     const filtered = keyword
//       ? productData.filter((product) =>
//           product.title?.toLowerCase().includes(keyword)
//         )
//       : [];

//     setFilterProduct(filtered);
//   }, [productData, input]);
