import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";
import data from "../cart";
import axios from "axios";

const url = "https://dummyjson.com/products";

const AppContext = createContext();

const initialState = {
  products: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  quantity: 0,
  total: 0,
  loading: false,
  selectedCate: [],
  filterproduct: [],
  modal: false,
  searchquery: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const fetchdata = async () => {
    dispatch({ type: "LOADING" });
    const resp = await axios.get(url);

    dispatch({ type: "SHOWPRODUCT", payload: resp.data.products });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const filterbyCategories = (category) => {
    console.log(category);
    dispatch({ type: "CATEGORY", payload: category });
  };
  const addtocart = (cat) => {
    dispatch({ type: "ADDTOCART", payload: cat });
  };
  const handlemodal = () => {
    dispatch({ type: "MODAL" });
  };
  const closemodal = () => {
    dispatch({ type: "CLOSEMODAL" });
  };
  const deletCart = (id) => {
    dispatch({ type: "REMOVECART", payload: id });
  };
  const search = (e) => {
    dispatch({ type: "SEARCH", payload: e.target.value });
  };
  const clearCart = () => {
    dispatch({ type: "CLEARCART" });
  };
  useEffect(() => {
    dispatch({ type: "TOTALPRICE" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        filterbyCategories,
        addtocart,
        handlemodal,
        closemodal,
        deletCart,
        search,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
