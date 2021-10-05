// import React from "react";

// function App() {
//   const [theme, setTheme] = useState("dark");

//   const toggleTheme = () => {
//     const nextTheme = theme === "dark" ? "light" : "dark";
//     setTheme(nextTheme);
//   };

//   return <button onClick={toggleTheme}>
//       Current theme: {theme}
//     </button>;
// }

// export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;