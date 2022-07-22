import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { Products } from "./components/Products";
import { Product } from "./components/Product";
import { Cart } from "./components/Cart";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Login } from "./components/buttons/Login";
import { Signup } from "./components/buttons/Signup";
import { Checkout } from "./components/Checkout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Signup />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
