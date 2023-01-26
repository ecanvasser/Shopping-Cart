import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Home from "./components/Home.js";
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import SubmitOrder from "./components/SubmitOrder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/context/CartContext";
import { StoreProvider } from "./components/context/StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StoreProvider>
      <CartProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/store" exact element={<Store />} />
          <Route path="/store/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/submitted" element={<SubmitOrder />} />
        </Routes>
      </CartProvider>
    </StoreProvider>
  </BrowserRouter>
);
