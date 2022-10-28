import React from "react";
import {render} from "react-dom";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import {Navbar, Users} from "./components";
import {Home, Fola, Presh, Tomi, NotFound } from "./mypages";
import ErrorBoundaries from "./components/ErrorBoundaries";

function App() {
  return (
    <div className="container">
      <ErrorBoundaries FallbackComponent={ErrorSample}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} >
          <Route path="fola" element={<Fola />} />
          <Route path="presh" element={<Presh />} />
          <Route path="tomi" element={<Tomi/>} />
        </Route>
          <Route path="/Users" element= {<Users/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      </ErrorBoundaries>
    </div>
  );
}

export default App;