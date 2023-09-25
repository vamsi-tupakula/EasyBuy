import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import { store } from "../app/store.js";
import "./index.css";
import "./utils.css";
import SearchPage from "./components/SearchPage.jsx";
import ProductPage from "./components/ProductPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
