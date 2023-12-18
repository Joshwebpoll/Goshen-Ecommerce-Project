import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalContext } from "./context/context";

const App = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <div>
      <div>
        <Navbar />
        <Home />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
