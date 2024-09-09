// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Asegúrate de importar Router correctamente
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { CartProvider } from './context/CartContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  return (
    <CartProvider> {/* Contexto del carrito que envuelve toda la aplicación */}
      <Router> {/* Asegúrate de que el Router envuelva todos los componentes */}
        <div className='container'>
          <div className='nav-container'>
            <Navbar
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              navtitle={'¡Pizzería Mamma Mia!'}
            />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/profile" element={<Profile userEmail={userEmail} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
          <Footer footerContent={'©2021 - Pizzería Mamma Mia! - Todos los derechos reservados'} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
