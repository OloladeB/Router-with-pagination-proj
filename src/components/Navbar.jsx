import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Home</Link>
      </div>
      <ul>
        <li>
          <Link to="/fola">Fola</Link>
        </li>
        <li>
          <Link to="/presh">Presh</Link>
        </li>
        <li>
        <Link to="/tomi">Tomi</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;