import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/frontend/Home";
function App() {
  return (
    <Router basename="/">
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
