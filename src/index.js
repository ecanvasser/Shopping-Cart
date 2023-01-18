import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Home from './components/Home.js';
import Store from './components/Store'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/store" element={<Store />}/>
      <Route path="/cart" />
    </Routes>
  </BrowserRouter>
);
