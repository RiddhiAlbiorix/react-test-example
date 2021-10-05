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
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
     <TodoList />
    );
  }
}

export default App;