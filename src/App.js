import React from 'react';
import './components/css/main.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sections from "./components/Sections";

const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Sections/>
    </div>
  );
}

export default App;