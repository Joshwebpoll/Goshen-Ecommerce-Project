import React from "react";
import { useGlobalContext } from "../context/context";
import ProductItems from "./ProductItems";
import { ToastContainer } from "react-toastify";

const Product = () => {
  const { filterproduct } = useGlobalContext();

  return (
    <div className="container mt-5">
      <div className="row g-4">
        {filterproduct.length === 0 ? (
          <h1 className="text-center">No Product Found</h1>
        ) : (
          filterproduct.map((product) => {
            return <ProductItems key={product.id} {...product} />;
          })
        )}
      </div>
    </div>
  );
};

export default Product;
