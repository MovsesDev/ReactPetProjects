import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Store from "./pages/Store";
import { Container } from "./components/Container";
import { ShoppingCartProvider, useShoppingCart } from "./context/ShoppingCartContext";

const App = () => {

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/" element={<About />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
