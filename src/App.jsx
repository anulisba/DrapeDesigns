import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import './App.css';
import EidLandingPage from "./pages/landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClothingStore from "./pages/Clothing";
import ProductDetailPage from "./pages/ProductDetailPage";
import Splash from "./pages/splash";


function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash ? (
        <Splash onFinish={handleSplashFinish} />
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<EidLandingPage />} />
            <Route path='/clothing-store' element={<ClothingStore />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
