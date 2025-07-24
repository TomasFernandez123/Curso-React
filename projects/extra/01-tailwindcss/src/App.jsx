import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Carrito from './pages/Carrito';
import Products from './pages/Products';
import ScrollToTop from './components/common/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function AppContent() {
  const location = useLocation();
  const isProductosPage = location.pathname === "/productos";
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar search={isProductosPage} searchValue={searchValue} onSearchChange={setSearchValue} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/productos" element={<Products searchValue={searchValue} />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
