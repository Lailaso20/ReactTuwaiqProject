// main.jsx
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import DashBoard from "./pages/Dashboard.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./components/CartContext.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import ProductList from "./components/ProductList.jsx";
import Product from "./components/Product.jsx";

createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CartContextProvider>
);
