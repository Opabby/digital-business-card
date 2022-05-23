import React from "react";
import ReactDOM from "react-dom/client";
import Info from './components/Info.js';
import About from "./components/About.js";
import Interests from "./components/Interests.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div>
      <div className="card">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
    
  );
}
