import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header'; 
import Footer from './components/Footer';  
import Home from './Home';  
import Dashboard from './Dashboard'; 

const Layout = () => {
  return (
    <Router>
      <Header />  
      
      <Routes>  
        
        <Route path="/" element={<Home />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/home" element={<Home/>} />

      </Routes>

      <Footer />  
    </Router>
  );
};

export default Layout;
