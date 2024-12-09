import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>
      <footer>
        This project was coded by Hoda Maghsoudi and is
          <a
            href="https://github.com/hoda-maghsoudi/final"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://remarkable-zuccutto-1e2a0d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
        </div>
    </div>
  );
}