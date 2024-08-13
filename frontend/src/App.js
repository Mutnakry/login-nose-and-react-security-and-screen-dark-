
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import 'flowbite';
import React, { useState, useEffect } from 'react';
// import from page
import Navbar from './conponent/Navbar';
import Dashboard from './page/Dashboard';
import Test from './page/Test'
import Category from './page/Category';
import Login from './conponent/Login';
import Register from './conponent/Register';
import Index from './page/Index';
import { ToastContainer } from 'react-toastify';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/Dashboard" /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Index />} />
          <Route path="/Dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/test" element={isAuthenticated ? <Test /> : <Navigate to="/" />} />
          <Route path="/category" element={isAuthenticated ? <Category /> : <Navigate to="/" />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;