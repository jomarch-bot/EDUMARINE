import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Common/Navbar";
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";
import Vendors from "./pages/Vendors/Vendors";
import Students from "./pages/Students/Students";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/students" element={<Students />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
