import React, { Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/frontend/Home";
import About from "./pages/frontend/About";
import Drugs from "./pages/frontend/Drugs";
import Blog from "./pages/frontend/Blog";
import Contact from "./pages/frontend/Contact";
import Login from "./pages/backend/Login";
import "./App.css";
import Index from "./pages/backend";
import Brand from "./pages/backend/Brand";
import AddBrand from "./pages/backend/AddBrand";
import UpdateBrand from "./pages/backend/UpdateBrand";
import Category from "./pages/backend/Category";
import AddCategory from "./pages/backend/AddCategory";
import UpdateCategory from "./pages/backend/UpdateCategory";
import ImportDrug from "./pages/backend/ImportDrug";
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
          <Route exact path="/admin" element={<Index />} />
          <Route exact path="/admin/brand" element={<Brand />} />
          <Route exact path="/admin/add-brand" element={<AddBrand />} />
          <Route
            exact
            path="/admin/update-brand/:id"
            element={<UpdateBrand />}
          />
          <Route exact path="/admin/categories" element={<Category />} />
          <Route exact path="/admin/add-category" element={<AddCategory />} />
          <Route
            exact
            path="/admin/update-category/:id"
            element={<UpdateCategory />}
          />
          <Route exact path="/admin/import-drugs" element={<ImportDrug />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
