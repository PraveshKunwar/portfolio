import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import components for each route
import Home from "../components/Home";
import Books from "../components/Books";
import Projects from "../components/Projects";

const App: React.FC = () => {
  return (
    <Router>
      <div className="root">
        {/* Navigation Menu */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
