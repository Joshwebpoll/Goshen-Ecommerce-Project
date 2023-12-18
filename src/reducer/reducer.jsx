import { toast } from "react-toastify";

export const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "SHOWPRODUCT") {
    return {
      ...state,
      products: action.payload,
      filterproduct: action.payload,
      selectedCate: action.payload,
      loading: false,
    };
  }

  if (action.type === "CATEGORY") {
    const filteritem =
      action.payload === "all"
        ? state.products
        : state.products.filter((items) => {
            return items.category === action.payload;
          });

    return { ...state, filterproduct: filteritem };
  }
  if (action.type === "ADDTOCART") {
    const duplicate = state.cart.find((item) => {
      return item.id === action.payload.id;
    });

    if (duplicate) {
      state.cart.map((item) => {
        if (item.id === action.payload.id) {
          toast.error("Product Already Exists");
          return { ...item };
        }
        return item;
      });
    } else {
      const addtocart = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(addtocart));
      toast.success("Added to cart successfully");

      return { ...state, cart: addtocart };
    }
  }

  if (action.type === "MODAL") {
    return { ...state, modal: true };
  }
  if (action.type === "CLOSEMODAL") {
    return { ...state, modal: false };
  }

  if (action.type === "REMOVECART") {
    const remove = state.cart.filter((cart) => {
      return cart.id !== action.payload;
    });
    localStorage.setItem("cart", JSON.stringify(remove));
    toast.success("Product Deleted Successfully");
    return { ...state, cart: remove };
  }
  if (action.type === "SEARCH") {
    const searchitem = state.products.filter((product) => {
      return product.title.toLowerCase().includes(action.payload.toLowerCase());
    });
    console.log(searchitem);
    return { ...state, searchquery: action.payload, filterproduct: searchitem };
  }
  if (action.type === "TOTALPRICE") {
    let totalprice = state.cart.reduce((acc, item) => {
      const { price } = item;
      acc += price;
      return acc;
    }, 0);
    return { ...state, total: totalprice };
  }
  if (action.type === "CLEARCART") {
    localStorage.clear();
    return { ...state, cart: [] };
  }
  return state;
};
