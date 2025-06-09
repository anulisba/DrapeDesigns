import Header from "./components/Header"
import './App.css';
import EidLandingPage from "./pages/landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClothingStore from "./pages/Clothing";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<EidLandingPage />} />
        <Route path='/clothing-store' element={<ClothingStore />} />
        <Route path='/product-detail' element={<ProductDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
