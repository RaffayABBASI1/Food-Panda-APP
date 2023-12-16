import React from 'react';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homescreen from './Screens/Homescreen';
import Cartscreen from './Screens/Cartscreen';
import Registerscreen from './Screens/Registerscreen';
import Loginscreen from './Screens/Loginscreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Ordersscreen from './Screens/Ordersscreen';

 
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/cart" element={<Cartscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/orders" element={<Ordersscreen />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
