// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Component
import Route1 from "./pages/Route1";
import Route2 from "./pages/Route2";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/route1" element={<Route1 />} />
        <Route path="/route2" element={<Route2 />} />
      </Routes>
    </Router>
  );
};

export default App;
