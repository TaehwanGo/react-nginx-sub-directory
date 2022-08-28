import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const movePage = (event: React.MouseEvent<HTMLAnchorElement>) => {
  //   console.log("event", event);
  // };
  useEffect(() => {
    const currentPage = window.location.href;
    console.log("currentPage", currentPage);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          href="?page=1"
          //onClick={movePage}
        >
          move to page 1
        </a>
      </header>
    </div>
  );
}

export default App;
