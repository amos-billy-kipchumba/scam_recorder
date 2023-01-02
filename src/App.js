import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/" element={ <Home /> } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
