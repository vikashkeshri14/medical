import React, { Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/frontend/Home";
import About from "./pages/frontend/About";
import Drugs from "./pages/frontend/Drugs";
import Blog from "./pages/frontend/Blog";
import Contact from "./pages/frontend/Contact";
import Login from "./pages/backend/Login";
import "./App.css";
function App() {
  return (
    <Router basename="/">
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/drugs" element={<Drugs />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact-us" element={<Contact />} />
          <Route exact path="/admin/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
