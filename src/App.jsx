import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Footer from "./components/layout/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/layout/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import favoritesContext from "./contexts/favoritesContext";
import Contact from "./pages/Contact";
import QtyTotalContext from "./contexts/QtyTotalContext";

function App() {
  const [favorites, setFavorites] = useState(0);
  const [qtyTotal, setQtyTotal] = useState(0);

  return (
    <QtyTotalContext.Provider value={[qtyTotal, setQtyTotal]}>
      <favoritesContext.Provider value={[favorites, setFavorites]}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/furniture-shopping-website" element={<Home />} />
        <Route path="/" element={<Navigate to="/furniture-shopping-website" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </favoritesContext.Provider>
    </QtyTotalContext.Provider>
  );
}

export default App;
