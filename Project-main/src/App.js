import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import Menu from "./Components/Menu";
import BookTable from "./Components/BookTable";
import Gallery from "./Components/Gallery";
import Chefs from "./Components/Chefs";
import ContactSection from "./Components/ContactSection";
import WhyUs from "./Components/WhyUS";
import Login from "./Components/Login";
import Admin from "./Components/admin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book-table" element={<BookTable />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
