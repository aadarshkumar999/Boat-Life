import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import CategoriesPage from "./components/CategoriesPage";
import Boatpersonalisation from "./components/Boatpersonalisation";
import CorporateOrdersPage from "./components/CorporateOrdersPage";
import GiftStorePage from "./components/GiftStorePage";
import MorePage from "./components/MorePage";
import NotFoundPage from "./components/Pages/NotFoundPage";
import ProductDetail from "./components/Products/ProductDetail";
import ProductDetails2 from "./components/Products/ProductDetails2";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Categories" element={<CategoriesPage />} />
          <Route
            path="/boat-personalisation"
            element={<Boatpersonalisation />}
          />
          <Route path="/corporate-orders" element={<CorporateOrdersPage />} />
          <Route path="/gift-store" element={<GiftStorePage />} />
          <Route path="/more" element={<MorePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/product/se/:id" element={ <ProductDetails2/>} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
