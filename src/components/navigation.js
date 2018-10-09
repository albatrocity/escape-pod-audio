import React from "react";
import { Link } from "gatsby";

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 200, padding: `0 1rem` }}>
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
  </div>
);
