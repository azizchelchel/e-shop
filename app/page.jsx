import React from "react";
import ListProducts from "./components/products/ListProducts.jsx";
import { getProductsFromApi } from "../app/services/product.services.js";

const HomePage = () => {
  const productsData = getProductsFromApi();
  return <ListProducts data={productsData} />;
};

export default HomePage;
