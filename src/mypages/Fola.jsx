import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Fola() {
  const location = useLocation();

  return (
    <div>
      <div className="header">
        <ul>
          <li>
            <Link to="/fola/presh">PRESH</Link>
          </li>
          <li>
            <Link to="/fola/tomi">TOMI</Link>
          </li>
        </ul>
      </div>
      {location.pathname === "/fola" ? (
        <div>
          <h2>Fola's Page</h2>
          <p>
            Muheeb Omofolawe Ajoke.
          </p>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default Fola;