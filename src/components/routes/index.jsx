import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import ContactPage from "../../pages/ContactPage";
import HomePage from "../../pages/HomePage";
import NotFundPage from "../../pages/NotFundPage";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFundPage />} />
    </Routes>
  );
}

export default Routers;
