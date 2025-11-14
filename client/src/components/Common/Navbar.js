import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => (
  <nav>
    <Link to="/">Dashboard</Link>
    <Link to="/courses">Courses</Link>
    <Link to="/vendors">Vendors</Link>
    <Link to="/students">Students</Link>
    <Link to="/profile">Profile</Link>
  </nav>
);
export default Navbar;
