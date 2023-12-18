import React from "react";
import { BsCart3 } from "react-icons/bs";
import { useGlobalContext } from "../context/context";

import Modalbox from "./Modalbox";

const Navbar = () => {
  const { cart, handlemodal, modal } = useGlobalContext();

  return (
    <div className="  pt-5">
      <div className="container ">
        <nav className="navbar navbar-expand-lg bgfixed fixed-top pt-4 ">
          <div className="container">
            <a className="navbar-brand" href="#">
              GoshenHub
            </a>
            {modal && <Modalbox />}

            <div>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item  ">
                  <button className="nav-link  d-block" onClick={handlemodal}>
                    <BsCart3 className="fs-3 position-relative   " />

                    <span className=" fs-6 stack px-2 text-white rounded-circle cartcol">
                      {cart.length}
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
