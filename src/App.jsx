import React, { useState } from "react";
import Header from "./components/Header";
import './App.css';
import EidLandingPage from "./pages/landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClothingStore from "./pages/Clothing";
import ProductDetailPage from "./pages/ProductDetailPage";
import RouteChangeHandler from "./components/RouteChangeHandler";
import Splash from "./pages/splash";
import CategoryPage from "./pages/CategoryDisplayPage";
import AboutUs from "./pages/AboutUs";

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
          <RouteChangeHandler>
            <Routes>
              <Route path="/" element={<EidLandingPage />} />
              <Route path="/clothing-store" element={<ClothingStore />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/category-page" element={<CategoryPage />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </RouteChangeHandler>
        </Router>
      )}
    </>
  );
}

export default App;
