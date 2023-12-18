import React from "react";
import Product from "../components/Product";
import { useGlobalContext } from "../context/context";

const Home = () => {
  const { selectedCate, filterbyCategories, searchquery, search, handlemodal } =
    useGlobalContext();

  const filterproduct = selectedCate.map((product) => {
    return product.category;
  });
  const prod = new Set(filterproduct);
  const allcat = ["all", ...prod];

  return (
    <div>
      <div>
        <div className="container mt-4">
          <div className="d-flex justify-content-center btntop ">
            {allcat.map((cate, index) => {
              return (
                <div key={index} className="me-2  ">
                  <button
                    onClick={() => {
                      filterbyCategories(cate);
                    }}
                    className="btn btn-primary text-capitalize"
                  >
                    {cate}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="mt-5  text-md-center text-sm-center text-lg-end inputcontainer">
            <input
              type="text"
              className="  w-25  py-1 ps-2 searchinput"
              name="search"
              placeholder="Search Product"
              value={searchquery}
              onChange={search}
            />
          </div>
        </div>
      </div>

      <Product />
    </div>
  );
};

export default Home;
