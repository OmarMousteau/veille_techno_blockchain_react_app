import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import Articles from './pages/Articles';
import Synthese from './pages/Synthese';
import Methodologie from './pages/Methodologie';

const App = () => {
  return (
    <Router basename="/">
      <div className="p-4">
        <nav className="mb-6">
          <Link to="/" className="mr-4 text-blue-500">Accueil</Link>
          <Link to="/articles" className="mr-4 text-blue-500">Articles</Link>
          <Link to="/synthese" className="mr-4 text-blue-500">État de l'art</Link>
          <Link to="/methodologie" className="mr-4 text-blue-500">Méthodologie de veille</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/synthese" element={<Synthese />} />
          <Route path="/methodologie" element={<Methodologie />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
