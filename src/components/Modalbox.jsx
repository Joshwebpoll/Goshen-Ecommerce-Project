import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useGlobalContext } from "../context/context";
import Table from "react-bootstrap/Table";
import Product from "./Product";
import { MdDelete } from "react-icons/md";

const Modalbox = () => {
  const { modal, closemodal, cart, deletCart, total, clearCart } =
    useGlobalContext();

  return (
    <>
      <Modal
        show={modal}
        onHide={closemodal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        {cart.length > 0 ? (
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="">
                {cart.map((items) => {
                  return (
                    <tr key={items.id}>
                      <td>
                        <img
                          src={items.thumbnail}
                          alt={items.title}
                          className="cartimg me-2"
                        />
                      </td>
                      <td>{items.title}</td>
                      <td>
                        <p>${items.price}</p>
                      </td>
                      <td>
                        <MdDelete
                          onClick={() => deletCart(items.id)}
                          className="fs-2 deleteach"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div className="text-end">
              <p className="fw-bold me-3">
                {" "}
                Total Price :<span>${total}</span>
              </p>
              <div className="text-center mb-3">
                <button onClick={clearCart} className="btn btn-primary">
                  Clear All
                </button>
              </div>
            </div>
          </Modal.Body>
        ) : (
          <div className="text text-center fw-bold fs-6">
            <p>Cart is Empty</p>
          </div>
        )}

        <Modal.Footer>
          <Button onClick={closemodal}>Close Cart</Button>
          {/* <Button>Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modalbox;
