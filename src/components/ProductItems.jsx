import { useGlobalContext } from "../context/context";

const ProductItems = (props) => {
  const { addtocart } = useGlobalContext();
  return (
    <div className="col-md-3 ">
      <div className="card h-100">
        <img
          className="card-img-top img-style"
          src={props.thumbnail}
          alt="Card image cap"
        />

        <div className="card-body">
          <h5>{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <div className="px-2 py-3 d-flex justify-content-between ">
          <span className="pricecol">${props.price}</span>
          <span className="cate text-capitalize">{props.category}</span>
        </div>
        <button
          onClick={() => {
            addtocart(props);
          }}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItems;
