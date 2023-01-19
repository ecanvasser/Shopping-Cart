import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Home from "./components/Home.js";
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/store" exact element={<Store />} />
      <Route path="/store/:id" element={<ProductDetails />}/>
      <Route path="/cart" />
    </Routes>
  </BrowserRouter>
);
