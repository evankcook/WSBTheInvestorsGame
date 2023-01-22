import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Gameboard from "./pages/Gameboard";
import RedditTop50 from "./pages/RedditTop50";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game:gameID" element={<Gameboard />} />
        <Route path="/my-dashboard:userID" element={<Dashboard />} />
        <Route path="/select:userID" element={<RedditTop50 />} />
      </Routes>
    </Router>
  );
}

export default App;
